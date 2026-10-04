interface ContactReceiptData {
  fullName: string;
  email: string;
  message: string;
}

export function buildContactReceiptHtml(data: ContactReceiptData): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Accusé de réception — Cabinet Me Arnaud Cheynut</title>
</head>
<body style="margin:0;padding:32px 12px;background:#F8F6F0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1C1917;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8F6F0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(11,29,58,0.05);border:1px solid #E7E5E4;">
        <!-- Header -->
        <tr><td style="background:#0B1D3A;padding:26px 32px;border-bottom:3px solid #C8A850;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <a href="https://www.arnaudcheynut.com" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;display:inline-block;">
                  <img src="https://www.arnaudcheynut.com/_next/image?url=%2Fimages%2Flogo-horizontal.png&w=640&q=75" alt="Cabinet Me Arnaud Cheynut" width="220" style="display:block;width:220px;max-width:100%;height:auto;border:0;" />
                </a>
              </td>
              <td align="right" style="vertical-align:middle;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#C8A850;font-weight:700;border:1px solid rgba(200,168,80,0.35);padding:4px 10px;border-radius:4px;background:rgba(200,168,80,0.1);">
                  Monaco
                </span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 32px 28px 32px;">
          <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#C8A850;font-weight:700;">Accusé de Réception</p>
          <h1 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#0B1D3A;font-weight:normal;">
            Bonjour ${escapeHtml(data.fullName)},
          </h1>
          <p style="margin:0 0 16px;font-size:14px;line-height:1.65;color:#44403C;">
            Nous accusons bonne réception de votre demande. Me Arnaud Cheynut ou son secrétariat reviendra vers vous <strong>sous 24 heures ouvrées</strong> dans le cadre d'un échange strictement confidentiel.
          </p>

          <!-- Recap -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF9F6;border-radius:4px;margin:24px 0;border:1px solid #E7E5E4;border-left:3px solid #C8A850;">
            <tr><td style="padding:18px 20px;">
              <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#78716C;font-weight:700;">Récapitulatif de votre transmission</p>
              <p style="margin:0 0 4px;font-size:13px;line-height:1.5;"><strong>Nom :</strong> ${escapeHtml(data.fullName)}</p>
              <p style="margin:0 0 6px;font-size:13px;line-height:1.5;"><strong>Email :</strong> ${escapeHtml(data.email)}</p>
              <p style="margin:0;font-size:13px;line-height:1.5;"><strong>Message :</strong> ${escapeHtml(data.message.slice(0, 300))}${data.message.length > 300 ? "…" : ""}</p>
            </td></tr>
          </table>

          <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#44403C;">
            Pour toute urgence judiciaire immédiate (garde à vue, perquisition, référé d'heure à heure) :
          </p>
          <p style="margin:0 0 4px;font-size:13px;">
            <strong>Permanence téléphonique 24/7 :</strong> <a href="tel:+33575282381" style="color:#0B1D3A;font-weight:600;text-decoration:none;">+33 5 75 28 23 81</a>
          </p>
          <p style="margin:0;font-size:13px;">
            <strong>Courriel :</strong> <a href="mailto:contact@arnaudcheynut.com" style="color:#C8A850;font-weight:600;text-decoration:none;">contact@arnaudcheynut.com</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#FAF9F6;padding:20px 32px;border-top:1px solid #E7E5E4;">
          <p style="margin:0;font-size:11px;color:#78716C;line-height:1.5;">
            Cabinet Me Arnaud Cheynut &bull; 9 rue du Gabian, Phase III, 98000 Monaco<br>
            Avocat-Défenseur près la Cour d'Appel de Monaco &bull; Ordre des Avocats de Monaco
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
    ? `<span style="display:inline-block;background:#DC2626;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:4px;text-transform:uppercase;letter-spacing:0.5px;">URGENT</span> `
    : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Nouvelle prise de contact — Cabinet Me Arnaud Cheynut</title>
</head>
<body style="margin:0;padding:32px 12px;background:#F8F6F0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1C1917;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8F6F0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(11,29,58,0.05);border:1px solid #E7E5E4;">
        <!-- Header -->
        <tr><td style="background:#0B1D3A;padding:26px 32px;border-bottom:3px solid #C8A850;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <a href="https://www.arnaudcheynut.com" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;display:inline-block;">
                  <img src="https://www.arnaudcheynut.com/_next/image?url=%2Fimages%2Flogo-horizontal.png&w=640&q=75" alt="Cabinet Me Arnaud Cheynut" width="220" style="display:block;width:220px;max-width:100%;height:auto;border:0;" />
                </a>
              </td>
              <td align="right" style="vertical-align:middle;">
                ${urgentBadge}
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Details -->
        <tr><td style="padding:32px;">
          <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#78716C;font-weight:700;">Portail arnaudcheynut.com</p>
          <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#0B1D3A;font-weight:normal;">Nouvelle demande de rendez-vous / contact</h2>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF9F6;border:1px solid #E7E5E4;border-radius:6px;margin-bottom:20px;">
            <tr>
              <td style="padding:14px 20px;font-size:11px;color:#78716C;width:140px;vertical-align:top;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #E7E5E4;">Nom complet</td>
              <td style="padding:14px 20px;font-size:14px;font-weight:bold;color:#0B1D3A;border-bottom:1px solid #E7E5E4;">${escapeHtml(data.fullName)}</td>
            </tr>
            <tr>
              <td style="padding:12px 20px;font-size:11px;color:#78716C;width:140px;vertical-align:top;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #E7E5E4;">Email</td>
              <td style="padding:12px 20px;font-size:14px;border-bottom:1px solid #E7E5E4;"><a href="mailto:${escapeHtml(data.email)}" style="color:#0B1D3A;font-weight:600;text-decoration:none;">${escapeHtml(data.email)}</a></td>
            </tr>
            ${data.phone ? `<tr>
              <td style="padding:12px 20px;font-size:11px;color:#78716C;width:140px;vertical-align:top;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #E7E5E4;">Téléphone</td>
              <td style="padding:12px 20px;font-size:14px;border-bottom:1px solid #E7E5E4;"><a href="tel:${escapeHtml(data.phone)}" style="color:#0B1D3A;font-weight:600;text-decoration:none;">${escapeHtml(data.phone)}</a></td>
            </tr>` : ""}
            ${data.practiceAreaSlug ? `<tr>
              <td style="padding:12px 20px;font-size:11px;color:#78716C;width:140px;vertical-align:top;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #E7E5E4;">Matière</td>
              <td style="padding:12px 20px;font-size:14px;color:#0B1D3A;font-weight:600;border-bottom:1px solid #E7E5E4;">${escapeHtml(data.practiceAreaSlug)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:12px 20px;font-size:11px;color:#78716C;width:140px;vertical-align:top;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Date &amp; Heure</td>
              <td style="padding:12px 20px;font-size:14px;color:#44403C;">${escapeHtml(data.submittedAt)}</td>
            </tr>
          </table>

          <!-- Message -->
          <div style="margin:20px 0;padding:18px 20px;background:#ffffff;border-radius:4px;border:1px solid #E7E5E4;border-left:3px solid #C8A850;">
            <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#78716C;font-weight:700;">Exposé de la Situation</p>
            <p style="margin:0;font-size:14px;line-height:1.65;white-space:pre-wrap;color:#1C1917;">${escapeHtml(data.message)}</p>
          </div>

          <!-- Actions -->
          <div style="text-align:center;padding-top:8px;">
            <a href="mailto:${escapeHtml(data.email)}?subject=Cabinet Me Arnaud Cheynut — Suite à votre demande" style="display:inline-block;background:#0B1D3A;color:#FFFFFF;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;text-decoration:none;padding:12px 24px;border-radius:4px;margin-right:8px;">
              Répondre par email
            </a>
            ${data.phone ? `<a href="tel:${escapeHtml(data.phone)}" style="display:inline-block;background:#C8A850;color:#0B1D3A;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;text-decoration:none;padding:12px 20px;border-radius:4px;">Appeler directement</a>` : ""}
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#FAF9F6;padding:16px 32px;border-top:1px solid #E7E5E4;text-align:center;">
          <p style="margin:0;font-size:11px;color:#78716C;">
            Notification émise en direct pour le Cabinet de Me Arnaud Cheynut &bull; Fontvieille, Monaco
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
