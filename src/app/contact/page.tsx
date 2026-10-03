import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Me Arnaud Cheynut — Avocat-Défenseur Monaco",
  description:
    "Contactez le Cabinet de Me Arnaud Cheynut, Avocat-Défenseur à Monaco. 9 rue du Gabian, Fontvieille — +377 97 98 06 80.",
};

export default function ContactPage() {
  return (
    <main className="bg-stone-50 pb-24">
      <PageHeader
        title="Contact"
        backgroundImage="/images/headers/contact.jpg"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
            <h2 className="font-montserrat text-2xl font-bold text-navy-900 mb-6">
              Envoyer un Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Details + Map */}
          <div>
            <h2 className="font-montserrat text-2xl font-bold text-navy-900 mb-8">
              Coordonnées du Cabinet
            </h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm uppercase tracking-wider mb-1">
                    Adresse
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    9 rue du Gabian, Phase III
                    <br />
                    98000 Monaco (Fontvieille)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm uppercase tracking-wider mb-1">
                    Téléphone
                  </p>
                  <a
                    href="tel:+37797980680"
                    className="text-stone-600 hover:text-navy-900 transition-colors"
                  >
                    +377 97 98 06 80
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:contact@anaudcheynut.com"
                    className="text-stone-600 hover:text-navy-900 transition-colors"
                  >
                    contact@anaudcheynut.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm uppercase tracking-wider mb-1">
                    Horaires
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Lundi – Vendredi : 9h00 – 18h00
                    <br />
                    <span className="text-stone-400">
                      Sur rendez-vous uniquement
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map with Branded Overlay */}
            <div className="relative rounded-xl overflow-hidden shadow-sm border border-stone-200">
              <iframe
                title="Cabinet Me Arnaud Cheynut — 9 rue du Gabian, Monaco"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.8!2d7.418!3d43.727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc29c6c0be8d1%3A0x0!2s9%20Rue%20du%20Gabian%2C%20Monaco!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />

              {/* Firm name label pinned on the map */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-[280px]">
                <div className="bg-navy-900/95 backdrop-blur-sm text-stone-50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-navy-900" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-sm leading-tight">
                      Me Arnaud Cheynut
                    </p>
                    <p className="text-[11px] text-stone-300 leading-tight mt-0.5">
                      9 rue du Gabian · Fontvieille
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-stone-400 text-center">
              Fontvieille, Principauté de Monaco — Accès parking Phase III
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
