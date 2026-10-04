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
<body style="margin: 0; padding: 32px 12px; background-color: #F8F6F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1C1917; -webkit-font-smoothing: antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E7E5E4; box-shadow: 0 4px 16px rgba(11, 29, 58, 0.05); overflow: hidden;">
    <!-- Top Navy Brand Bar with Official Logo -->
    <tr>
      <td style="background-color: #0B1D3A; padding: 26px 32px; border-bottom: 3px solid #C8A850;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="vertical-align: middle;">
              <a href="https://www.arnaudcheynut.com" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border: 0; display: inline-block;">
                <img src="https://www.arnaudcheynut.com/_next/image?url=%2Fimages%2Flogo-horizontal.png&w=640&q=75" alt="Cabinet Me Arnaud Cheynut - Avocat-Défenseur Monaco" width="220" style="display: block; width: 220px; max-width: 100%; height: auto; border: 0;" />
              </a>
            </td>
            <td align="right" style="vertical-align: middle;">
              <span style="display: inline-block; font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: #C8A850; font-weight: 700; border: 1px solid rgba(200, 168, 80, 0.35); padding: 4px 10px; border-radius: 4px; background-color: rgba(200, 168, 80, 0.1);">
                Monaco
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Main Message Area -->
    <tr>
      <td style="padding: 36px 32px 24px 32px;">
        <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #C8A850; font-weight: 700;">
          Accusé de Réception Officiel
        </p>
        <h1 style="margin: 0 0 18px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; color: #0B1D3A; font-weight: normal; letter-spacing: -0.01em;">
          Bonjour ${escapeHtml(name)},
        </h1>

        <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.65; color: #44403C;">
          Nous accusons bonne réception de votre transmission effectuée sur le portail du Cabinet. Vos informations ont été enregistrées en toute confidentialité et transmises à l'attention de <strong>Me Arnaud Cheynut</strong>.
        </p>
        <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.65; color: #44403C;">
          Conformément aux règles déontologiques du Barreau de Monaco, votre demande fait l'objet d'un examen attentif. Le Cabinet ou son secrétariat prendra contact avec vous sous <strong>24 heures ouvrées</strong> pour convenir des suites à donner ou fixer une consultation.
        </p>

        <!-- Message Summary Card -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FAF9F6; border-left: 3px solid #C8A850; border-radius: 4px; margin-bottom: 26px; border: 1px solid #E7E5E4; border-left-width: 3px;">
          <tr>
            <td style="padding: 18px 20px;">
              <p style="margin: 0 0 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C; font-weight: 700;">
                Récapitulatif de votre transmission
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="padding: 3px 0; font-size: 12px; color: #78716C; width: 75px; vertical-align: top; font-weight: 600;">Email :</td>
                  <td style="padding: 3px 0; font-size: 13px; color: #0B1D3A; font-weight: 500;">${escapeHtml(email)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0 2px 0; font-size: 12px; color: #78716C; vertical-align: top; font-weight: 600;" colspan="2">Exposé sommaire :</td>
                </tr>
                <tr>
                  <td style="padding: 2px 0 0 0; font-size: 13px; line-height: 1.6; color: #44403C; white-space: pre-wrap;" colspan="2">${escapeHtml(message)}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Emergency Procedure Notice Box -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B1D3A; border-radius: 6px; margin-bottom: 28px;">
          <tr>
            <td style="padding: 16px 20px;">
              <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #C8A850; font-weight: 700;">
                Urgence Judiciaire Immédiate
              </p>
              <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #E7E5E4;">
                En cas de garde à vue, perquisition, saisie ou référé d'heure à heure, veuillez joindre directement la permanence téléphonique :&nbsp;
                <a href="tel:+33575282381" style="color: #FFFFFF; font-weight: bold; text-decoration: underline; text-underline-offset: 3px;">+33 5 75 28 23 81</a> (24h/24 &bull; 7j/7).
              </p>
            </td>
          </tr>
        </table>

        <!-- Integrated Signature Block -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid #E7E5E4; padding-top: 24px;">
          <tr>
            <td style="padding-bottom: 12px;">
              <a href="https://www.arnaudcheynut.com" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border: 0; display: inline-block;">
                <img src="https://www.arnaudcheynut.com/_next/image?url=%2Fimages%2Flogo-horizontal.png&w=640&q=75" alt="Cabinet Me Arnaud Cheynut" width="190" style="display: block; width: 190px; max-width: 100%; height: auto; border: 0;" />
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 10px; border-bottom: 2px solid #C8A850;">
              <p style="margin: 0 0 2px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-weight: bold; color: #0B1D3A; letter-spacing: 0.02em;">
                Me Arnaud Cheynut
              </p>
              <p style="margin: 0; font-size: 11px; color: #C8A850; text-transform: uppercase; letter-spacing: 0.14em; font-weight: 700;">
                Avocat-Défenseur
              </p>
              <p style="margin: 3px 0 0 0; font-size: 11px; color: #57534E;">
                Près la Cour d'Appel &bull; Ordre des Avocats de Monaco
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 12px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="font-size: 12px; line-height: 1.6; color: #44403C;">
                <tr>
                  <td style="padding: 2px 0;">
                    <span style="color: #78716C; text-transform: uppercase; font-size: 10px; letter-spacing: 0.08em; font-weight: 600; display: inline-block; width: 68px;">Adresse</span>
                    <span style="color: #0B1D3A; font-weight: 500;">9 rue du Gabian, Phase III, Fontvieille, 98000 Monaco</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2px 0;">
                    <span style="color: #78716C; text-transform: uppercase; font-size: 10px; letter-spacing: 0.08em; font-weight: 600; display: inline-block; width: 68px;">Téléphone</span>
                    <a href="tel:+33575282381" style="color: #0B1D3A; text-decoration: none; font-weight: 600;">+33 5 75 28 23 81</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2px 0;">
                    <span style="color: #78716C; text-transform: uppercase; font-size: 10px; letter-spacing: 0.08em; font-weight: 600; display: inline-block; width: 68px;">Email</span>
                    <a href="mailto:contact@arnaudcheynut.com" style="color: #C8A850; text-decoration: none; font-weight: 600;">contact@arnaudcheynut.com</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 2px 0;">
                    <span style="color: #78716C; text-transform: uppercase; font-size: 10px; letter-spacing: 0.08em; font-weight: 600; display: inline-block; width: 68px;">Site Web</span>
                    <a href="https://www.arnaudcheynut.com" target="_blank" rel="noopener noreferrer" style="color: #C8A850; text-decoration: none; font-weight: 600;">arnaudcheynut.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 14px; font-size: 9px; line-height: 1.45; color: #A8A29E; border-top: 1px solid #F5F5F4; text-align: justify;">
              Ce message et ses pièces éventuelles sont strictement confidentiels et couverts par le secret professionnel de l'avocat (Loi n° 1.047 du 28 juillet 1982). Si vous n'êtes pas le destinataire désigné, merci de le notifier immédiatement à l'expéditeur et de détruire ce document.
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
