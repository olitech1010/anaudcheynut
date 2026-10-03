import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | Arnaud Cheynut",
  description: "Contactez le cabinet.",
};

export default function ContactPage() {
  return (
    <main className="bg-stone-50 pb-24">
      <PageHeader
        title="Contact"
        backgroundImage="/images/headers/contact.jpg"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact", href: "/contact" }]}
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
            <h2 className="font-montserrat text-2xl font-bold text-navy-900 mb-6">Envoyer un Message</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="font-montserrat text-2xl font-bold text-navy-900 mb-6">Coordonnées du Cabinet</h2>
            <div className="space-y-4 text-stone-600 mb-10">
              <p><strong>Adresse :</strong> 123 Avenue de la Côte, 98000 Monaco</p>
              <p><strong>Téléphone :</strong> +377 00 00 00 00</p>
              <p><strong>Email :</strong> contact@cabinet-cheynut.mc</p>
            </div>
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image src="/images/office-reception.jpg" alt="Reception" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
