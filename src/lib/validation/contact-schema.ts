import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Veuillez renseigner votre nom et prénom (au moins 2 caractères).")
    .max(100, "Le nom ne peut excéder 100 caractères."),
  email: z
    .string()
    .email("Veuillez renseigner une adresse email valide."),
  phone: z
    .string()
    .optional(),
  practiceAreaSlug: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, "Votre message doit contenir au moins 10 caractères pour nous permettre d'évaluer votre situation.")
    .max(3000, "Le message ne peut excéder 3000 caractères."),
  isUrgent: z
    .boolean()
    .default(false),
  rgpdConsent: z
    .literal(true, {
      errorMap: () => ({
        message: "Vous devez accepter le traitement de vos données pour soumettre une demande.",
      }),
    }),
  honeypot: z
    .string()
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
