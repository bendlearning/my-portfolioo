import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  BookOpen, Trophy, Briefcase, Factory, Store, FileText,
  GraduationCap, Zap, TrendingUp, Globe,
} from 'lucide-react';

const experienceItems = [
  { key: 'instructor', icon: BookOpen, color: 'from-violet-500 to-purple-600' },
  { key: 'graduation', icon: Trophy, color: 'from-blue-500 to-cyan-600' },
  { key: 'management', icon: Briefcase, color: 'from-emerald-500 to-teal-600' },
  { key: 'factory', icon: Factory, color: 'from-orange-500 to-amber-600' },
  { key: 'retail', icon: Store, color: 'from-pink-500 to-rose-600' },
  { key: 'invoicing', icon: FileText, color: 'from-indigo-500 to-blue-600' },
  { key: 'edApps', icon: GraduationCap, color: 'from-yellow-500 to-orange-600' },
  { key: 'digital', icon: Zap, color: 'from-fuchsia-500 to-violet-600' },
  { key: 'market', icon: TrendingUp, color: 'from-cyan-500 to-blue-600' },
  { key: 'international', icon: Globe, color: 'from-slate-500 to-gray-600' },
];

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-950/10" />
      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute start-8 sm:start-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-violet-500 opacity-30 hidden sm:block" />

          <div className="space-y-8">
            {experienceItems.map(({ key, icon: Icon, color }, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex items-start gap-4 sm:gap-0 sm:items-center ${isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isRight ? 'sm:pe-12' : 'sm:ps-12'}`}>
                    <div className="card-glass card-hover group">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 dark:text-white text-base mb-1">
                            {t(`experience.items.${key}`)}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            {t(`experience.items.${key}Desc`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden sm:flex absolute start-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 border-2 border-white dark:border-navy-900 shadow-lg z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
