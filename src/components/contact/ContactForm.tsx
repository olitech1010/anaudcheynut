"use client";

import { useActionState } from "react";
import { submitContactAction, type ContactActionResult } from "@/app/actions/contact";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
import { CheckCircle2, AlertCircle, Send, ShieldCheck, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const initialState: ContactActionResult = {
  success: false,
  message: "",
};

export function ContactForm() {
  const { lang, t } = useLanguage();
  const [state, formAction, isPending] = useActionState(submitContactAction, initialState);

  if (state.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 sm:p-8 text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-montserrat font-bold text-xl text-emerald-900">
          {t.contactForm.successTitle}
        </h3>
        <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
          {state.message || t.contactForm.successMessage}
        </p>
        <div className="pt-4 border-t border-emerald-200 text-xs text-emerald-700 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
          <span>{t.contactForm.secrecyNotice}</span>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-white rounded-xl p-5 sm:p-8 border border-stone-200 shadow-xs space-y-6">
      {state.message && !state.success && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
          <span>{state.message}</span>
        </div>
      )}

      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_title_verify">Ne pas remplir ce champ</label>
        <input
          type="text"
          id="website_title_verify"
          name="website_title_verify"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Full name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            {t.contactForm.fullNameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder={t.contactForm.fullNamePlaceholder}
            className="w-full px-4 py-3 rounded-md border border-stone-300 bg-white text-stone-900 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-transparent transition-all placeholder:text-stone-400"
          />
          {state.errors?.fullName && (
            <p className="text-xs text-red-600 mt-1">{state.errors.fullName[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            {t.contactForm.emailLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={t.contactForm.emailPlaceholder}
            className="w-full px-4 py-3 rounded-md border border-stone-300 bg-white text-stone-900 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-transparent transition-all placeholder:text-stone-400"
          />
          {state.errors?.email && (
            <p className="text-xs text-red-600 mt-1">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone + Practice Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            {t.contactForm.phoneLabel}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={t.contactForm.phonePlaceholder}
            className="w-full px-4 py-3 rounded-md border border-stone-300 bg-white text-stone-900 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-transparent transition-all placeholder:text-stone-400"
          />
          {state.errors?.phone && (
            <p className="text-xs text-red-600 mt-1">{state.errors.phone[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="practiceAreaSlug" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            {t.contactForm.practiceLabel}
          </label>
          <select
            id="practiceAreaSlug"
            name="practiceAreaSlug"
            defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-stone-300 bg-white text-stone-900 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-transparent transition-all"
          >
            <option value="">{t.contactForm.practicePlaceholder}</option>
            {PRACTICE_AREAS.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
            <option value="autre">{t.contactForm.practiceOther}</option>
          </select>
        </div>
      </div>

      {/* Row 3: Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
          {t.contactForm.messageLabel} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t.contactForm.messagePlaceholder}
          className="w-full px-4 py-3 rounded-md border border-stone-300 bg-white text-stone-900 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-transparent transition-all placeholder:text-stone-400"
        />
        {state.errors?.message && (
          <p className="text-xs text-red-600 mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      {/* Row 4: Urgency Checkbox */}
      <div className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50 border border-stone-200">
        <input
          type="checkbox"
          id="isUrgent"
          name="isUrgent"
          className="mt-1 h-4 w-4 rounded border-stone-300 text-navy-900 focus:ring-gold-500"
        />
        <label htmlFor="isUrgent" className="text-xs text-stone-700 leading-normal cursor-pointer">
          <strong className="text-navy-900">
            {lang === "fr" ? "Procédure d'urgence requise" : "Urgent procedure requested"}
          </strong>
          {lang === "fr"
            ? " : garde à vue en cours, référé d'heure à heure ou délai judiciaire expirant sous 48h."
            : ": police custody in progress, emergency interim injunction, or legal deadline within 48h."}
        </label>
      </div>

      {/* Row 5: RGPD Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="rgpdConsent"
          name="rgpdConsent"
          required
          className="mt-1 h-4 w-4 rounded border-stone-300 text-navy-900 focus:ring-gold-500"
        />
        <label htmlFor="rgpdConsent" className="text-xs text-stone-600 leading-normal cursor-pointer">
          {t.contactForm.consentText} <span className="text-red-500">*</span>
        </label>
      </div>
      {state.errors?.rgpdConsent && (
        <p className="text-xs text-red-600">{state.errors.rgpdConsent[0]}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 disabled:bg-navy-700 text-stone-50 font-semibold px-6 py-3.5 rounded-md text-xs sm:text-sm uppercase tracking-wider shadow-sm active:scale-[0.98] transition-all cursor-pointer"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
            <span>{t.contactForm.submittingButton}</span>
          </>
        ) : (
          <>
            <span>{t.contactForm.submitButton}</span>
            <Send className="w-4 h-4 text-gold-400" />
          </>
        )}
      </button>
    </form>
  );
}
