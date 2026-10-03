export function contactReceiptTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; color: #0B1D3A; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #FAFAF9;">
      <h1 style="color: #C8A850;">Bonjour ${name},</h1>
      <p>Votre demande a été reçue avec succès.</p>
      <p>Nous vous répondrons sous 24h ouvrées.</p>
      <div style="background-color: #FAFAF9; padding: 15px; margin: 20px 0; border-left: 4px solid #C8A850;">
        <h2 style="font-size: 16px; margin-top: 0;">Récapitulatif de votre message :</h2>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
      <p>Pour toute question urgente, n'hésitez pas à nous contacter directement :</p>
      <p>
        Téléphone : +377 97 98 06 80<br>
        Email : contact@anaudcheynut.com
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        Cabinet Me Arnaud Cheynut, Avocat-Défenseur<br>
        9 rue du Gabian, Phase III, Fontvieille, 98000 Monaco
      </p>
    </div>
  `;
}
