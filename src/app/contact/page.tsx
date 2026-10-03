import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Scale, PhoneCall } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Consultation | Cabinet Me Arnaud Cheynut Monaco",
  description:
    "Prenez rendez-vous avec Me Arnaud Cheynut, Avocat-Défenseur à Monaco. Cabinet situé à Fontvieille (9 rue du Gabian). Ligne directe urgences : +377 97 98 06 80.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Prendre Contact
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-900 mt-2 tracking-tight">
            Consultation &amp; Coordonnées du Cabinet
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Pour solliciter un conseil juridique, organiser un rendez-vous ou signaler une urgence pénale, le Cabinet de Me Arnaud Cheynut est à votre disposition en Principauté de Monaco.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Urgent hotline box */}
            <div className="bg-navy-900 text-stone-100 rounded-xl p-6 sm:p-8 border border-navy-800 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-gold-400">
                <PhoneCall className="w-5 h-5 text-gold-500 animate-pulse" />
                <span className="text-xs uppercase tracking-wider font-bold">
                  Permanence d&apos;Urgence 24/7
                </span>
              </div>
              <h2 className="font-serif text-xl font-bold text-white">
                Garde à Vue &amp; Référés Immédiats
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed">
                En cas d&apos;interpellation, de perquisition ou d&apos;urgence procédurale à Monaco, joignez directement la ligne d&apos;intervention d&apos;urgence.
              </p>
              <div className="pt-2">
                <Link
                  href="tel:+37797980680"
                  className="inline-flex items-center justify-center w-full gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold py-3 px-4 rounded-md text-sm shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+377 97 98 06 80</span>
                </Link>
              </div>
            </div>

            {/* Standard Cabinet Coordinates */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
              <h3 className="font-serif text-lg font-bold text-navy-900 border-b border-stone-100 pb-3">
                Coordonnées du Cabinet
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-navy-900">Adresse en Principauté :</strong>
                    <span className="text-stone-600 leading-relaxed block mt-0.5">
                      Cabinet Me Arnaud Cheynut<br />
                      9 rue du Gabian, Phase III<br />
                      Fontvieille, 98000 Monaco
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-navy-900">Téléphone standard :</strong>
                    <Link
                      href="tel:+37797980680"
                      className="text-stone-700 hover:text-gold-600 transition-colors block mt-0.5"
                    >
                      +377 97 98 06 80
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-navy-900">Email :</strong>
                    <Link
                      href="mailto:contact@zabaldano.com"
                      className="text-stone-700 hover:text-gold-600 transition-colors block mt-0.5"
                    >
                      contact@zabaldano.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-navy-900">Horaires du Cabinet :</strong>
                    <span className="text-stone-600 block mt-0.5">
                      Lundi – Vendredi : 08h30 – 19h00<br />
                      Rendez-vous sur demande
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Secret professionnel garanti (Art. 308 CP monégasque)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <h2 className="font-serif text-2xl font-bold text-navy-900">
                Formulaire de Prise de Contact
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Transmettez votre demande en toute confidentialité. Une réponse vous sera apportée sous 24h ouvrées.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
