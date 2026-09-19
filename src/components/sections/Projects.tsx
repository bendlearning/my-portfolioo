import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, X, Tag, Cpu } from 'lucide-react';
import { projects } from '@/data/config';

// Google Play icon SVG
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M3.18 23.2c.3.17.64.26 1 .26.36 0 .7-.09 1-.26l13.18-7.6-2.96-2.97L3.18 23.2zM.82 1.36C.31 1.69 0 2.28 0 3v18c0 .72.31 1.31.82 1.64l.12.07 10.08-10.08v-.24L.94 1.29.82 1.36zM21.32 10.5l-2.8-1.62-3.16 3.16 3.16 3.15 2.82-1.63c.8-.46.8-1.61-.02-2.06zM4.18.8l13.18 7.6-2.96 2.97L4.18 1.1A1.95 1.95 0 013.18.8c-.37 0-.7.09-1 .26l13.18 7.6z" />
  </svg>
);

// App icon placeholder with gradient
function AppIcon({ name, color = 'from-indigo-500 to-violet-600' }: { name: string; color?: string }) {
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0`}>
      {initials}
    </div>
  );
}

const ICON_COLORS = [
  'from-violet-500 to-purple-600',
  'from-blue-500 to-cyan-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-amber-600',
  'from-pink-500 to-rose-600',
  'from-indigo-500 to-blue-600',
  'from-yellow-500 to-orange-600',
  'from-fuchsia-500 to-violet-600',
];

const ALL_CATS_EN = 'All';

export function Projects() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [filter, setFilter] = useState<string>('all');
  const [active, setActive] = useState<typeof projects[0] | null>(null);

  // Build unique categories
  const categories = ['all', ...Array.from(new Set(projects.map(p => isArabic ? p.categoryAr : p.categoryEn)))];

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => (isArabic ? p.categoryAr : p.categoryEn) === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/20 to-transparent dark:via-cyan-950/10" />
      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                  : 'glass-light dark:glass text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400'
              }`}
            >
              {cat === 'all' ? t('projects.allCategories') : cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="card-glass group cursor-pointer relative overflow-hidden"
                onClick={() => setActive(project)}
              >
                {project.featured && (
                  <div className="absolute top-3 end-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold shadow">
                    ⭐ {t('projects.featured')}
                  </div>
                )}

                {/* App icon */}
                <AppIcon name={isArabic ? project.nameAr : project.nameEn} color={ICON_COLORS[i % ICON_COLORS.length]} />

                {/* Info */}
                <div className="mt-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Tag size={11} className="text-indigo-400" />
                    <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                      {isArabic ? project.categoryAr : project.categoryEn}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-base mb-2 leading-snug">
                    {isArabic ? project.nameAr : project.nameEn}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {isArabic ? project.descAr : project.descEn}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                      aria-label={`${t('projects.openInPlay')}: ${isArabic ? project.nameAr : project.nameEn}`}
                    >
                      <PlayIcon />
                      <span className="hidden sm:inline">Play</span>
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-medium hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={12} />
                      <span className="hidden sm:inline">{t('projects.visitWebsite')}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-white dark:bg-navy-800 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 end-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>

              <AppIcon name={isArabic ? active.nameAr : active.nameEn} color={ICON_COLORS[projects.indexOf(active) % ICON_COLORS.length]} />

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <Tag size={12} className="text-indigo-400" />
                  <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                    {isArabic ? active.categoryAr : active.categoryEn}
                  </span>
                  {active.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold">⭐ {t('projects.featured')}</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  {isArabic ? active.nameAr : active.nameEn}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {isArabic ? active.descAr : active.descEn}
                </p>

                {/* Technologies */}
                {active.technologies && (
                  <div className="mb-5">
                    <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      <Cpu size={12} />
                      {t('projects.technologies')}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {active.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {active.playStoreUrl && (
                    <a
                      href={active.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center text-sm"
                    >
                      <PlayIcon />
                      {t('projects.openInPlay')}
                    </a>
                  )}
                  {active.websiteUrl && (
                    <a
                      href={active.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center text-sm"
                    >
                      <ExternalLink size={16} />
                      {t('projects.visitWebsite')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
