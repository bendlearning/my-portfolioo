import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle, AlertCircle } from 'lucide-react';
import { technicalServices, contactInfo } from '@/data/config';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function TechnicalServices() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const requestService = (serviceTitle: string) => {
    const msg = isArabic
      ? `مرحباً، أود الاستفسار عن: ${serviceTitle}`
      : `Hello, I'd like to inquire about: ${serviceTitle}`;
    window.open(`${contactInfo.whatsapp1Link}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-50/20 to-transparent dark:via-fuchsia-950/10" />
      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('techServices.title')}</h2>
          <p className="section-subtitle">{t('techServices.subtitle')}</p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10"
        >
          {technicalServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="card-glass group flex flex-col"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="font-bold text-slate-800 dark:text-white text-base mb-2 leading-snug">
                {isArabic ? service.titleAr : service.titleEn}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {isArabic ? service.descAr : service.descEn}
              </p>
              <div className="mb-4">
                <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400">
                  {isArabic ? service.pricingAr : service.pricingEn}
                </span>
              </div>
              <button
                onClick={() => requestService(isArabic ? service.titleAr : service.titleEn)}
                className="flex items-center gap-2 justify-center w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle size={14} />
                {t('techServices.requestService')}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glass border border-amber-200 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-500/5"
        >
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <h4 className="font-bold text-slate-800 dark:text-white">{t('techServices.notes.title')}</h4>
          </div>
          <ul className="space-y-2">
            {['prepayment', 'bugPrice', 'specialPrice'].map((noteKey) => (
              <li key={noteKey} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="text-amber-500 mt-0.5">•</span>
                {t(`techServices.notes.${noteKey}`)}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
