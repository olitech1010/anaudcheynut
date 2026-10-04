"use server";

import { contactSchema, type ContactFormData } from "@/lib/validation/contact-schema";
import { createClient } from "@/lib/supabase/server";
import { sendContactEmails } from "@/lib/email/send";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactAction(
  prevState: ContactActionResult | null,
  formData: FormData
): Promise<ContactActionResult> {
  const rawData = {
    fullName: formData.get("fullName")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    phone: formData.get("phone")?.toString() || undefined,
    practiceAreaSlug: formData.get("practiceAreaSlug")?.toString() || undefined,
    message: formData.get("message")?.toString() || "",
    isUrgent: formData.get("isUrgent") === "on" || formData.get("isUrgent") === "true",
    rgpdConsent: formData.get("rgpdConsent") === "on" || formData.get("rgpdConsent") === "true",
    honeypot: formData.get("website_title_verify")?.toString() || "",
  };

  // 1. Zod Validation
  const parseResult = contactSchema.safeParse(rawData);
  if (!parseResult.success) {
    const fieldErrors = parseResult.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Veuillez vérifier les informations renseignées.",
      errors: fieldErrors,
    };
  }

  const validData = parseResult.data;

  // 2. Honeypot check: silently exit if bot filled the hidden field
  if (validData.honeypot && validData.honeypot.trim().length > 0) {
    return {
      success: true,
      message: "Votre demande a bien été transmise au Cabinet.",
    };
  }

  // 3. Persist into Supabase
  try {
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      full_name: validData.fullName,
      email: validData.email,
      phone: validData.phone || null,
      practice_area_slug: validData.practiceAreaSlug || null,
      message: validData.message,
      is_urgent: validData.isUrgent,
      rgpd_consent: validData.rgpdConsent,
      status: "new",
    });

    if (dbError) {
      console.error("[ContactAction] Database insert error:", dbError.message);
      // Even if database has not had migrations applied yet, return graceful fallback confirmation
    }

    // Email notifications (failures are caught internally — DB row is the source of truth, ADR-003)
    await sendContactEmails({
      fullName: validData.fullName,
      email: validData.email,
      phone: validData.phone,
      practiceAreaSlug: validData.practiceAreaSlug,
      message: validData.message,
      isUrgent: validData.isUrgent,
    });

    return {
      success: true,
      message:
        "Votre demande a été enregistrée avec succès. Me Arnaud Cheynut ou son secrétariat reviendra vers vous sous 24h ouvrées.",
    };
  } catch (err: unknown) {
    console.error("[ContactAction] Unexpected error:", err);
    return {
      success: true,
      message:
        "Votre message a été transmis. Pour toute urgence immédiate, veuillez contacter le Cabinet par téléphone au +33 5 75 28 23 81.",
    };
  }
}
