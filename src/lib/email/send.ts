import { resend } from "./resend";
import { contactReceiptTemplate } from "./templates/contact-receipt";
import { contactNotificationTemplate } from "./templates/contact-notification";

interface ContactData {
  fullName: string;
  email: string;
  phone?: string | null;
  practiceAreaSlug?: string | null;
  message: string;
  isUrgent: boolean;
}

/**
 * Sends both contact form emails (visitor receipt + lawyer notification).
 * Failures are logged but never thrown — the DB row is the source of truth (ADR-003).
 */
export async function sendContactEmails(data: ContactData): Promise<void> {
  const fromAddress = process.env.CONTACT_EMAIL_FROM || "cabinet@anaudcheynut.com";
  const toAddress = process.env.CONTACT_EMAIL_TO || "contact@anaudcheynut.com";
  const urgentPrefix = data.isUrgent ? "[URGENT] " : "";

  // 1. Receipt to the visitor
  try {
    await resend.emails.send({
      from: `Cabinet Me Arnaud Cheynut <${fromAddress}>`,
      to: data.email,
      replyTo: toAddress,
      subject: "Votre demande a été reçue — Cabinet Me Arnaud Cheynut",
      html: contactReceiptTemplate({
        name: data.fullName,
        email: data.email,
        message: data.message,
      }),
    });
  } catch (err) {
    console.error("[Email] Failed to send visitor receipt:", err);
  }

  // 2. Notification to the lawyer
  try {
    await resend.emails.send({
      from: `Site Web — Cabinet Cheynut <${fromAddress}>`,
      to: toAddress,
      replyTo: data.email,
      subject: `${urgentPrefix}Nouveau contact: ${data.fullName}`,
      html: contactNotificationTemplate({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        practiceArea: data.practiceAreaSlug,
        message: data.message,
        urgency: data.isUrgent,
      }),
    });
  } catch (err) {
    console.error("[Email] Failed to send lawyer notification:", err);
  }
}
