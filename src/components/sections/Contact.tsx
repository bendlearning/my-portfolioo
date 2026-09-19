import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { MessageCircle, Copy, Check, Phone } from 'lucide-react';
import { contactInfo, services } from '@/data/config';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  description: string;
  budget: string;
  language: string;
}

export function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const { copy, isCopied } = useCopyToClipboard();
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const msg = isArabic
      ? `مرحباً مهندس عبدالرحمن!\n\nالاسم: ${data.name}\nالبريد: ${data.email}\nواتساب: ${data.whatsapp}\nالخدمة: ${data.service}\nالوصف: ${data.description}${data.budget ? `\nالميزانية: ${data.budget}` : ''}${data.language ? `\nاللغة المفضلة: ${data.language}` : ''}`
      : `Hello Abd El Rahman!\n\nName: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\nService: ${data.service}\nDescription: ${data.description}${data.budget ? `\nBudget: ${data.budget}` : ''}${data.language ? `\nPreferred Language: ${data.language}` : ''}`;

    window.open(`${contactInfo.whatsapp1Link}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const serviceOptions = services.map((s) => ({
    value: s.id,
    label: isArabic ? s.titleAr : s.titleEn,
  }));
  serviceOptions.push({ value: 'other', label: t('common.services.other') });

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent dark:via-indigo-950/20" />

      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — WhatsApp cards */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              {t('contact.whatsapp.title')}
            </h3>

            {[
              { number: contactInfo.whatsapp1, display: t('contact.whatsapp.number1'), link: contactInfo.whatsapp1Link, key: 'wa1' },
              { number: contactInfo.whatsapp2, display: t('contact.whatsapp.number2'), link: contactInfo.whatsapp2Link, key: 'wa2' },
            ].map(({ number, display, link, key }) => (
              <div key={key} className="card-glass">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide mb-0.5">WhatsApp</p>
                    <p className="font-bold text-slate-800 dark:text-white text-lg tabular-nums" dir="ltr">{display}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle size={16} />
                    {t('contact.whatsapp.chat')}
                  </a>
                  <button
                    onClick={() => copy(number, key)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-light dark:glass border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {isCopied(key) ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                    {isCopied(key) ? t('contact.whatsapp.copied') : t('contact.whatsapp.copy')}
                  </button>
                </div>
              </div>
            ))}

            {/* Availability notice */}
            <div className="card-glass border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-500/5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">{t('hero.available')}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isArabic ? 'متاح للمشاريع الجديدة والاستفسارات التقنية' : 'Available for new projects and technical inquiries'}
              </p>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card-glass space-y-4" noValidate>
              {/* Note */}
              <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5 bg-slate-50 dark:bg-white/5 rounded-xl p-3">
                <MessageCircle size={12} />
                {t('contact.form.formNote')}
              </p>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.form.name')}</label>
                  <input
                    {...register('name', { required: true })}
                    placeholder={t('contact.form.namePlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${errors.name ? 'border-red-400' : 'border-slate-200 dark:border-white/10'} text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.form.email')}</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.form.whatsapp')}</label>
                <input
                  {...register('whatsapp')}
                  placeholder={t('contact.form.whatsappPlaceholder')}
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.form.service')}</label>
                <select
                  {...register('service', { required: true })}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border ${errors.service ? 'border-red-400' : 'border-slate-200 dark:border-white/10'} text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                >
                  <option value="">{t('contact.form.servicePlaceholder')}</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.form.description')}</label>
                <textarea
                  {...register('description', { required: true })}
                  placeholder={t('contact.form.descPlaceholder')}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${errors.description ? 'border-red-400' : 'border-slate-200 dark:border-white/10'} text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none`}
                />
              </div>

              {/* Budget + Language */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.form.budget')}</label>
                  <input
                    {...register('budget')}
                    placeholder={t('contact.form.budgetPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.form.language')}</label>
                  <select
                    {...register('language')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  >
                    <option value="">{t('contact.form.languagePlaceholder')}</option>
                    <option value="English">English</option>
                    <option value="Arabic">العربية</option>
                    <option value="Both">Both / كلاهما</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full justify-center py-4 text-base"
              >
                <MessageCircle size={18} />
                {submitted ? t('contact.form.success') : t('contact.form.submit')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
