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

  // 3. Email notifications (Primary delivery mechanism: direct to lawyer's inbox)
  try {
    await sendContactEmails({
      fullName: validData.fullName,
      email: validData.email,
      phone: validData.phone,
      practiceAreaSlug: validData.practiceAreaSlug,
      message: validData.message,
      isUrgent: validData.isUrgent,
    });
  } catch (emailErr) {
    console.error("[ContactAction] Email notification dispatch error:", emailErr);
  }

  // 4. Optional Supabase persistence (non-blocking fallback; website does not require DB)
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && !supabaseUrl.includes("your-project-id")) {
      const supabase = await createClient();
      await supabase.from("contact_submissions").insert({
        full_name: validData.fullName,
        email: validData.email,
        phone: validData.phone || null,
        practice_area_slug: validData.practiceAreaSlug || null,
        message: validData.message,
        is_urgent: validData.isUrgent,
        rgpd_consent: validData.rgpdConsent,
        status: "new",
      });
    }
  } catch (dbErr) {
    // Non-blocking: emails already handled
    console.warn("[ContactAction] Optional database logging skipped:", dbErr);
  }

  return {
    success: true,
    message:
      "Votre demande a été enregistrée avec succès. Me Arnaud Cheynut ou son secrétariat reviendra vers vous sous 24h ouvrées.",
  };
}
