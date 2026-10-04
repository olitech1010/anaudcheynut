export function contactReceiptTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Accusé de réception — Cabinet Me Arnaud Cheynut</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F8F6F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1C1917;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E7E5E4; box-shadow: 0 1px 3px rgba(0,0,0,0.06); overflow: hidden;">
    <!-- Top Header Banner -->
    <tr>
      <td style="background-color: #0B1D3A; padding: 24px 32px; border-bottom: 3px solid #C8A850;">
        <p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 20px; font-weight: bold; color: #FFFFFF; letter-spacing: 0.02em;">
          Cabinet Me Arnaud Cheynut
        </p>
        <p style="margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #C8A850; font-weight: 600;">
          Avocat-Défenseur — Principauté de Monaco
        </p>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 32px 32px 20px 32px;">
        <h2 style="margin: 0 0 16px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; color: #0B1D3A; font-weight: normal;">
          Bonjour ${escapeHtml(name)},
        </h2>
        <p style="margin: 0 0 14px 0; font-size: 14px; line-height: 1.6; color: #44403C;">
          Nous accusons bonne réception de votre prise de contact via notre portail institutionnel. Votre demande a été transmise directement à l'attention de Me Arnaud Cheynut.
        </p>
        <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #44403C;">
          Le Cabinet vous apportera une réponse personnalisée sous <strong>24 heures ouvrées</strong> dans le strict respect du secret professionnel.
        </p>

        <!-- Message Recap Box -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FAFAF9; border-left: 3px solid #C8A850; border-radius: 4px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 16px 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C; font-weight: 700;">
                Récapitulatif de votre transmission
              </p>
              <p style="margin: 0 0 6px 0; font-size: 13px; color: #1C1917;">
                <strong>Email :</strong> ${escapeHtml(email)}
              </p>
              <p style="margin: 0 0 4px 0; font-size: 13px; color: #1C1917;">
                <strong>Objet / Message :</strong>
              </p>
              <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #44403C; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </td>
          </tr>
        </table>

        <p style="margin: 0 0 24px 0; font-size: 13px; line-height: 1.5; color: #57534E;">
          Pour toute urgence immédiate (garde à vue, perquisition, référé d'heure à heure), nous vous invitons à composer directement la ligne d'urgence du Cabinet au <a href="tel:+33575282381" style="color: #0B1D3A; font-weight: 600; text-decoration: none;">+33 5 75 28 23 81</a>.
        </p>

        <!-- Signature Section -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid #E7E5E4; padding-top: 20px; margin-top: 16px;">
          <tr>
            <td style="padding-bottom: 10px; border-bottom: 2px solid #C8A850;">
              <p style="margin: 0 0 2px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-weight: bold; color: #0B1D3A; letter-spacing: 0.02em;">
                Me Arnaud Cheynut
              </p>
              <p style="margin: 0; font-size: 12px; color: #C8A850; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600;">
                Avocat-Défenseur
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #57534E;">
                Inscrit au Tableau de l'Ordre des Avocats de Monaco
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 10px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 2px 0; font-size: 12px; color: #44403C;">
                    <strong style="color: #0B1D3A;">Adresse :</strong>&nbsp;9 rue du Gabian, Phase III, Fontvieille, 98000 Monaco
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2px 0; font-size: 12px; color: #44403C;">
                    <strong style="color: #0B1D3A;">Tél :</strong>&nbsp;<a href="tel:+33575282381" style="color: #0B1D3A; text-decoration: none;">+33 5 75 28 23 81</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2px 0; font-size: 12px; color: #44403C;">
                    <strong style="color: #0B1D3A;">Email :</strong>&nbsp;<a href="mailto:contact@arnaudcheynut.com" style="color: #C8A850; text-decoration: none;">contact@arnaudcheynut.com</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2px 0; font-size: 12px; color: #44403C;">
                    <strong style="color: #0B1D3A;">Web :</strong>&nbsp;<a href="https://arnaudcheynut.com" style="color: #C8A850; text-decoration: none;">arnaudcheynut.com</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 8px; font-size: 10px; color: #78716C; font-style: italic;">
                    Urgences pénales &amp; référés : disponible 24h/24 – 7j/7
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 14px; font-size: 9px; line-height: 1.4; color: #A8A29E; border-top: 1px solid #F5F5F4;">
              Ce message et ses pièces jointes sont strictement confidentiels et couverts par le secret professionnel de l'avocat (Loi n° 1.047 du 28 juillet 1982). Si vous avez reçu cet email par erreur, merci de le notifier immédiatement à l'expéditeur et de le supprimer de votre messagerie.
            </td>
          </tr>
        </table>
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
