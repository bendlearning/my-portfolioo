import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ArrowRight, Smartphone, Code2, Building2, FileText, GraduationCap, Brain, Trophy, LayoutDashboard, Zap, TrendingUp, type LucideIcon } from 'lucide-react';
import { services } from '@/data/config';
import { contactInfo } from '@/data/config';

const iconMap: Record<string, LucideIcon> = {
  Smartphone, Code2, Building2, FileText, GraduationCap, Brain, Trophy, LayoutDashboard, Zap, TrendingUp,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Services() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  const openWhatsApp = (serviceTitle: string) => {
    const msg = isArabic
      ? `مرحباً، أود الاستفسار عن خدمة: ${serviceTitle}`
      : `Hello, I'd like to inquire about the service: ${serviceTitle}`;
    window.open(`${contactInfo.whatsapp1Link}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/20 to-transparent dark:via-violet-950/10" />
      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="card-glass group cursor-pointer relative overflow-hidden"
                onClick={() => setActiveService(service)}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 start-0 end-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="font-bold text-slate-800 dark:text-white mb-2 text-base leading-snug">
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {isArabic ? service.descAr : service.descEn}
                </p>

                <div className="flex items-center gap-1 text-indigo-500 dark:text-indigo-400 text-sm font-medium">
                  {t('services.learnMore')}
                  <ArrowRight size={14} className={isArabic ? 'rotate-180' : ''} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white dark:bg-navy-800 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 end-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                aria-label={t('services.close')}
              >
                <X size={16} />
              </button>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeService.color} flex items-center justify-center mb-5 shadow-xl`}>
                {(() => { const Icon = iconMap[activeService.icon] || Code2; return <Icon size={32} className="text-white" />; })()}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                {isArabic ? activeService.titleAr : activeService.titleEn}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6">
                {isArabic ? activeService.descAr : activeService.descEn}
              </p>

              {/* CTA */}
              <button
                onClick={() => openWhatsApp(isArabic ? activeService.titleAr : activeService.titleEn)}
                className="btn-primary w-full justify-center"
              >
                {t('services.requestService')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
