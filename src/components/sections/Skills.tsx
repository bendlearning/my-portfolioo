import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Smartphone, Code2, LayoutDashboard, GraduationCap, type LucideIcon } from 'lucide-react';
import { skills } from '@/data/config';

const iconMap: Record<string, LucideIcon> = {
  Smartphone, Code2, LayoutDashboard, GraduationCap,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Skills() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent dark:via-orange-950/10" />
      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.categoryEn}
                variants={cardVariants}
                className="card-glass group relative overflow-hidden"
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Category name */}
                <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-4">
                  {isArabic ? category.categoryAr : category.categoryEn}
                </h3>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-8">
            Core Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Flutter', emoji: '🐦' },
              { name: 'Dart', emoji: '🎯' },
              { name: 'Android', emoji: '🤖' },
              { name: 'Firebase', emoji: '🔥' },
              { name: 'React', emoji: '⚛️' },
              { name: 'TypeScript', emoji: '🔷' },
              { name: 'Git', emoji: '🌿' },
              { name: 'AI / ML', emoji: '🧠' },
            ].map(({ name, emoji }) => (
              <motion.div
                key={name}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-light dark:glass border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-700 dark:text-slate-200 cursor-default"
              >
                <span className="text-lg">{emoji}</span>
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
