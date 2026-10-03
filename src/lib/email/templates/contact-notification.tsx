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
  return `
    <div style="font-family: Arial, sans-serif; color: #0B1D3A; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #FAFAF9;">
      <h1 style="color: #C8A850;">Nouvelle demande de contact</h1>
      <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
      ${urgency ? '<p style="color: #d9534f; font-weight: bold; text-transform: uppercase;">[URGENT]</p>' : ''}
      <div style="background-color: #FAFAF9; padding: 15px; margin: 20px 0; border-left: 4px solid #0B1D3A;">
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Domaine d\\'expertise :</strong> ${practiceArea || 'Non renseigné'}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
      <p><a href="https://supabase.com/dashboard/project/_/editor" style="color: #C8A850; text-decoration: none; font-weight: bold;">Voir sur Supabase Studio</a></p>
    </div>
  `;
}
