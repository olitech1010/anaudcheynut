"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactClient() {
  const { t } = useLanguage();

  return (
    <main className="bg-stone-50 pb-16 sm:pb-24">
      <PageHeader
        title={t.contactPage.title}
        backgroundImage="/images/headers/contact.jpg"
        breadcrumbs={[
          { label: t.contactPage.breadcrumbsHome, href: "/" },
          { label: t.contactPage.breadcrumbsContact, href: "/contact" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form Container */}
          <div className="bg-white p-5 sm:p-8 rounded-xl shadow-xs border border-stone-200">
            <h2 className="font-montserrat text-xl sm:text-2xl font-bold text-navy-900 mb-6">
              {t.contactPage.formTitle}
            </h2>
            <ContactForm />
          </div>

          {/* Contact Details + Map */}
          <div>
            <h2 className="font-montserrat text-xl sm:text-2xl font-bold text-navy-900 mb-6 sm:mb-8">
              {t.contactPage.detailsTitle}
            </h2>

            <div className="space-y-5 mb-8 sm:mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-xs sm:text-sm uppercase tracking-wider mb-1">
                    {t.contactPage.addressTitle}
                  </p>
                  <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                    {t.contactPage.addressLine1}
                    <br />
                    {t.contactPage.addressLine2}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-xs sm:text-sm uppercase tracking-wider mb-1">
                    {t.contactPage.phoneTitle}
                  </p>
                  <a
                    href="tel:+33575282381"
                    className="text-stone-600 hover:text-navy-900 transition-colors text-sm sm:text-base font-medium"
                  >
                    +33 5 75 28 23 81
                  </a>
                </div>
              </div>

              {/* Email (with arnaud@arnaudcheynut.com directly under contact@arnaudcheynut.com) */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-xs sm:text-sm uppercase tracking-wider mb-1">
                    {t.contactPage.emailTitle}
                  </p>
                  <a
                    href="mailto:contact@arnaudcheynut.com"
                    className="block text-stone-600 hover:text-navy-900 transition-colors text-sm sm:text-base"
                  >
                    contact@arnaudcheynut.com
                  </a>
                  <a
                    href="mailto:arnaud@arnaudcheynut.com"
                    className="block text-stone-600 hover:text-navy-900 transition-colors text-sm sm:text-base mt-1"
                  >
                    arnaud@arnaudcheynut.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-xs sm:text-sm uppercase tracking-wider mb-1">
                    {t.contactPage.hoursTitle}
                  </p>
                  <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                    {t.contactPage.hoursValue}
                    <br />
                    <span className="text-stone-400 text-xs sm:text-sm">
                      {t.contactPage.hoursAppointment}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map with Branded Overlay */}
            <div className="relative rounded-xl overflow-hidden shadow-xs border border-stone-200">
              <iframe
                title="Cabinet Me Arnaud Cheynut — 9 rue du Gabian, Monaco"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.8!2d7.418!3d43.727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc29c6c0be8d1%3A0x0!2s9%20Rue%20du%20Gabian%2C%20Monaco!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />

              {/* Firm name label pinned on the map */}
              <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:max-w-[280px]">
                <div className="bg-navy-900/95 backdrop-blur-sm text-stone-50 px-3.5 py-2.5 rounded-lg shadow-lg flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-navy-900" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-xs sm:text-sm leading-tight">
                      {t.contactPage.mapPinTitle}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-stone-300 leading-tight mt-0.5">
                      {t.contactPage.mapPinSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-stone-400 text-center">
              {t.contactPage.mapCaption}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
