interface ContactReceiptData {
  fullName: string;
  email: string;
  message: string;
}

export function buildContactReceiptHtml(data: ContactReceiptData): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#fafaf9;font-family:'Montserrat',Helvetica,Arial,sans-serif;color:#44403c;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf9;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr><td style="background:#0B1D3A;padding:28px 32px;">
          <h1 style="margin:0;color:#C8A850;font-size:18px;font-weight:700;letter-spacing:0.5px;">Cabinet Me Arnaud Cheynut</h1>
          <p style="margin:4px 0 0;color:#e7e5e4;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Avocat-Défenseur — Monaco</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
            Bonjour <strong>${escapeHtml(data.fullName)}</strong>,
          </p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
            Nous avons bien reçu votre demande. Me Arnaud Cheynut ou son secrétariat reviendra vers vous <strong>sous 24h ouvrées</strong>.
          </p>

          <!-- Recap -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f4;border-radius:6px;margin:24px 0;">
            <tr><td style="padding:20px;">
              <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#78716c;font-weight:600;">Récapitulatif de votre message</p>
              <p style="margin:0 0 4px;font-size:14px;line-height:1.5;"><strong>Nom :</strong> ${escapeHtml(data.fullName)}</p>
              <p style="margin:0 0 4px;font-size:14px;line-height:1.5;"><strong>Email :</strong> ${escapeHtml(data.email)}</p>
              <p style="margin:0;font-size:14px;line-height:1.5;"><strong>Message :</strong> ${escapeHtml(data.message.slice(0, 300))}${data.message.length > 300 ? "…" : ""}</p>
            </td></tr>
          </table>

          <p style="margin:0 0 8px;font-size:15px;line-height:1.6;">
            Pour toute urgence immédiate, contactez directement le Cabinet :
          </p>
          <p style="margin:0 0 4px;font-size:14px;">
            <strong>Téléphone :</strong> <a href="tel:+33575282381" style="color:#0B1D3A;">+33 5 75 28 23 81</a>
          </p>
          <p style="margin:0;font-size:14px;">
            <strong>Email :</strong> <a href="mailto:contact@arnaudcheynut.com" style="color:#0B1D3A;">contact@arnaudcheynut.com</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f5f5f4;padding:20px 32px;border-top:1px solid #e7e5e4;">
          <p style="margin:0;font-size:11px;color:#78716c;line-height:1.5;">
            Cabinet Me Arnaud Cheynut — 9 rue du Gabian, Phase III, 98000 Monaco<br>
            Avocat-Défenseur près la Cour d'Appel de Monaco — Ordre des Avocats de Monaco
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

interface ContactNotificationData {
  fullName: string;
  email: string;
  phone?: string | null;
  practiceAreaSlug?: string | null;
  message: string;
  isUrgent: boolean;
  submittedAt: string;
}

export function buildContactNotificationHtml(data: ContactNotificationData): string {
  const urgentBadge = data.isUrgent
    ? `<span style="display:inline-block;background:#dc2626;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:4px;text-transform:uppercase;letter-spacing:0.5px;">URGENT</span> `
    : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#fafaf9;font-family:'Montserrat',Helvetica,Arial,sans-serif;color:#44403c;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf9;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr><td style="background:#0B1D3A;padding:28px 32px;">
          <h1 style="margin:0;color:#C8A850;font-size:16px;font-weight:700;">
            ${urgentBadge}Nouvelle demande de contact
          </h1>
        </td></tr>

        <!-- Details -->
        <tr><td style="padding:32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#78716c;width:140px;vertical-align:top;font-weight:600;">Nom complet</td>
              <td style="padding:8px 0;font-size:14px;">${escapeHtml(data.fullName)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#78716c;width:140px;vertical-align:top;font-weight:600;">Email</td>
              <td style="padding:8px 0;font-size:14px;"><a href="mailto:${escapeHtml(data.email)}" style="color:#0B1D3A;">${escapeHtml(data.email)}</a></td>
            </tr>
            ${data.phone ? `<tr>
              <td style="padding:8px 0;font-size:13px;color:#78716c;width:140px;vertical-align:top;font-weight:600;">Téléphone</td>
              <td style="padding:8px 0;font-size:14px;"><a href="tel:${escapeHtml(data.phone)}" style="color:#0B1D3A;">${escapeHtml(data.phone)}</a></td>
            </tr>` : ""}
            ${data.practiceAreaSlug ? `<tr>
              <td style="padding:8px 0;font-size:13px;color:#78716c;width:140px;vertical-align:top;font-weight:600;">Domaine</td>
              <td style="padding:8px 0;font-size:14px;">${escapeHtml(data.practiceAreaSlug)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#78716c;width:140px;vertical-align:top;font-weight:600;">Urgence</td>
              <td style="padding:8px 0;font-size:14px;">${data.isUrgent ? "Oui" : "Non"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#78716c;width:140px;vertical-align:top;font-weight:600;">Reçu le</td>
              <td style="padding:8px 0;font-size:14px;">${escapeHtml(data.submittedAt)}</td>
            </tr>
          </table>

          <!-- Message -->
          <div style="margin:24px 0 0;padding:20px;background:#f5f5f4;border-radius:6px;border-left:4px solid #C8A850;">
            <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#78716c;font-weight:600;">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f5f5f4;padding:16px 32px;border-top:1px solid #e7e5e4;">
          <p style="margin:0;font-size:11px;color:#78716c;">
            Gérer les soumissions dans <a href="https://supabase.com/dashboard" style="color:#0B1D3A;">Supabase Studio</a> → table contact_submissions
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function buildContactNotificationSubject(fullName: string, isUrgent: boolean): string {
  const prefix = isUrgent ? "[URGENT] " : "";
  return `${prefix}Nouvelle demande — ${fullName}`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
