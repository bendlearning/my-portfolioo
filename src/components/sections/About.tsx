import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Code2, Smartphone, BookOpen, Briefcase, Building2, Lightbulb, Star } from 'lucide-react';
import { personalInfo } from '@/data/config';

const highlights = [
  { key: 'degree', icon: GraduationCap, color: 'from-violet-500 to-purple-600' },
  { key: 'engineering', icon: Code2, color: 'from-blue-500 to-cyan-600' },
  { key: 'mobile', icon: Smartphone, color: 'from-emerald-500 to-teal-600' },
  { key: 'training', icon: BookOpen, color: 'from-orange-500 to-amber-600' },
  { key: 'management', icon: Briefcase, color: 'from-pink-500 to-rose-600' },
  { key: 'business', icon: Building2, color: 'from-indigo-500 to-blue-600' },
  { key: 'education', icon: Lightbulb, color: 'from-yellow-500 to-orange-600' },
  { key: 'freelance', icon: Star, color: 'from-fuchsia-500 to-violet-600' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/20 to-transparent dark:via-indigo-950/10" />
      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Profile image and identity */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500 blur-xl opacity-30 scale-95" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={isArabic ? personalInfo.nameAr : personalInfo.nameEn}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Name card */}
            <div className="card-glass w-full text-center lg:text-start">
              <p className="text-2xl font-bold text-gradient mb-1">
                {isArabic ? personalInfo.nameAr : personalInfo.nameEn}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                {isArabic ? personalInfo.titleAr : personalInfo.titleEn}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                <GraduationCap size={14} />
                {isArabic ? personalInfo.qualificationAr : personalInfo.qualificationEn}
              </div>
            </div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            <p>{t('about.body1')}</p>
            <p>{t('about.body2')}</p>
            <p>{t('about.body3')}</p>
            <p>{t('about.body4')}</p>

            <div className="pt-4">
              <a
                href="https://wa.me/201118397123"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                {t('common.contactMe')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-16"
        >
          {highlights.map(({ key, icon: Icon, color }) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="card-glass card-hover group cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon size={20} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                {t(`about.highlights.${key}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
