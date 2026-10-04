export function contactNotificationTemplate({
  name,
  email,
  phone,
  practiceArea,
  message,
  urgency,
}: {
  name: string;
  email: string;
  phone?: string | null;
  practiceArea?: string | null;
  message: string;
  urgency?: boolean | null;
}) {
  const dateFormatted = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const urgentBanner = urgency
    ? `<tr>
        <td style="background-color: #DC2626; padding: 12px 28px; text-align: center;">
          <p style="margin: 0; color: #FFFFFF; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">
            [URGENT] — Procédure prioritaire requise (Garde à vue / Référé / Délai &lt; 48h)
          </p>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nouveau contact / Demande de consultation — Cabinet Me Arnaud Cheynut</title>
</head>
<body style="margin: 0; padding: 32px 12px; background-color: #F8F6F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1C1917; -webkit-font-smoothing: antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E7E5E4; box-shadow: 0 4px 16px rgba(11, 29, 58, 0.05); overflow: hidden;">
    <!-- Top Navy Brand Bar with Official Logo -->
    <tr>
      <td style="background-color: #0B1D3A; padding: 26px 32px; border-bottom: 3px solid #C8A850;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="vertical-align: middle;">
              <a href="https://www.arnaudcheynut.com" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border: 0; display: inline-block;">
                <img src="https://www.arnaudcheynut.com/_next/image?url=%2Fimages%2Flogo-horizontal.png&w=640&q=75" alt="Cabinet Me Arnaud Cheynut" width="220" style="display: block; width: 220px; max-width: 100%; height: auto; border: 0;" />
              </a>
            </td>
            <td align="right" style="vertical-align: middle;">
              <span style="display: inline-block; font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: #C8A850; font-weight: 700; border: 1px solid rgba(200, 168, 80, 0.35); padding: 4px 10px; border-radius: 4px; background-color: rgba(200, 168, 80, 0.1);">
                Intake Portail
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${urgentBanner}

    <!-- Content -->
    <tr>
      <td style="padding: 32px 32px 24px 32px;">
        <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #78716C; font-weight: 700;">
          Dossier entrant &bull; Formulaire en ligne
        </p>
        <h1 style="margin: 0 0 6px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; color: #0B1D3A; font-weight: normal;">
          Nouvelle demande de rendez-vous
        </h1>
        <p style="margin: 0 0 24px 0; font-size: 13px; color: #78716C;">
          Reçue le <strong>${dateFormatted}</strong> (Heure de Paris / Monaco).
        </p>

        <!-- Client Identity Card -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FAF9F6; border: 1px solid #E7E5E4; border-radius: 6px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 16px 20px; border-bottom: 1px solid #E7E5E4; width: 34%; font-size: 11px; font-weight: 700; color: #78716C; text-transform: uppercase; letter-spacing: 0.06em;">
              Nom du Client
            </td>
            <td style="padding: 16px 20px; border-bottom: 1px solid #E7E5E4; font-size: 15px; font-weight: bold; color: #0B1D3A;">
              ${escapeHtml(name)}
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; border-bottom: 1px solid #E7E5E4; font-size: 11px; font-weight: 700; color: #78716C; text-transform: uppercase; letter-spacing: 0.06em;">
              Email
            </td>
            <td style="padding: 14px 20px; border-bottom: 1px solid #E7E5E4; font-size: 14px;">
              <a href="mailto:${escapeHtml(email)}" style="color: #0B1D3A; font-weight: 600; text-decoration: none;">
                ${escapeHtml(email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; border-bottom: 1px solid #E7E5E4; font-size: 11px; font-weight: 700; color: #78716C; text-transform: uppercase; letter-spacing: 0.06em;">
              Téléphone
            </td>
            <td style="padding: 14px 20px; border-bottom: 1px solid #E7E5E4; font-size: 14px;">
              ${phone ? `<a href="tel:${escapeHtml(phone)}" style="color: #0B1D3A; font-weight: 600; text-decoration: none;">${escapeHtml(phone)}</a>` : '<span style="color: #A8A29E; font-style: italic;">Non communiqué</span>'}
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; font-size: 11px; font-weight: 700; color: #78716C; text-transform: uppercase; letter-spacing: 0.06em;">
              Matière
            </td>
            <td style="padding: 14px 20px; font-size: 13px; color: #0B1D3A; font-weight: 600;">
              ${practiceArea ? `<span style="display: inline-block; background-color: #F5EBD9; color: #0B1D3A; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${escapeHtml(practiceArea)}</span>` : '<span style="color: #78716C; font-style: italic;">Conseil général / Non précisé</span>'}
            </td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="background-color: #FFFFFF; border-left: 3px solid #C8A850; border: 1px solid #E7E5E4; border-left-width: 3px; border-radius: 4px; padding: 18px 20px; margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #78716C; font-weight: 700;">
            Exposé de la Situation :
          </p>
          <p style="margin: 0; font-size: 14px; line-height: 1.65; color: #1C1917; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>

        <!-- Direct Action Bar -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 12px;">
          <tr>
            <td align="center" style="padding-top: 4px;">
              <a href="mailto:${escapeHtml(email)}?subject=Cabinet Me Arnaud Cheynut — Suite à votre demande" style="display: inline-block; background-color: #0B1D3A; color: #FFFFFF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; text-decoration: none; padding: 12px 24px; border-radius: 4px; margin-right: 10px; margin-bottom: 8px;">
                Répondre par email
              </a>
              ${phone ? `<a href="tel:${escapeHtml(phone)}" style="display: inline-block; background-color: #C8A850; color: #0B1D3A; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; text-decoration: none; padding: 12px 20px; border-radius: 4px; margin-bottom: 8px;">Appeler le client</a>` : ""}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #FAF9F6; padding: 16px 32px; border-top: 1px solid #E7E5E4; text-align: center;">
        <p style="margin: 0; font-size: 11px; color: #78716C; line-height: 1.5;">
          Notification automatique émise par le portail officiel <a href="https://www.arnaudcheynut.com" style="color: #0B1D3A; text-decoration: none; font-weight: 600;">arnaudcheynut.com</a><br>
          Cabinet Me Arnaud Cheynut &bull; 9 rue du Gabian, Fontvieille, 98000 Monaco
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
