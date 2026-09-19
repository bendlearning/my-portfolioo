import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Briefcase, Code2, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data/config';
import { useTheme } from '@/hooks/useTheme';

const HeroScene = lazy(() => import('@/components/3d/HeroScene').then((m) => ({ default: m.HeroScene })));

// WebGL check
function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch { return false; }
}

const webGLAvailable = hasWebGL();

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

interface HeroProps {
  onServicesClick: () => void;
}

export function Hero({ onServicesClick }: HeroProps) {
  const { t, i18n } = useTranslation();
  const { isDark } = useTheme();
  const isArabic = i18n.language === 'ar';

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-cyan-50/20 dark:from-navy-950 dark:via-navy-900 dark:to-indigo-950/30" />

      {/* Gradient orbs */}
      <div className="orb orb-brand w-[600px] h-[600px] top-[-200px] end-[-150px] opacity-60 dark:opacity-30" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[-100px] start-[-100px] opacity-40 dark:opacity-20" />

      {/* 3D Scene — desktop */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {webGLAvailable ? (
          <Suspense fallback={null}>
            <HeroScene isDark={isDark} />
          </Suspense>
        ) : null}
      </div>

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Content */}
          <div className="order-2 lg:order-1">
            {/* Available badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light dark:glass border border-green-500/30 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t('hero.available')}
            </motion.div>

            {/* Greeting */}
            <motion.p {...fadeUp(0.2)} className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-2">
              {t('hero.greeting')}
            </motion.p>

            {/* Name */}
            <motion.h1 {...fadeUp(0.3)} className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="text-gradient">{isArabic ? personalInfo.nameAr : personalInfo.nameEn}</span>
            </motion.h1>

            {/* Title */}
            <motion.p {...fadeUp(0.4)} className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
              {isArabic ? personalInfo.titleAr : personalInfo.titleEn}
            </motion.p>

            {/* Qualification */}
            <motion.div {...fadeUp(0.45)} className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-500" />
              <p className="text-base text-slate-500 dark:text-slate-400">
                {isArabic ? personalInfo.qualificationAr : personalInfo.qualificationEn}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p {...fadeUp(0.5)} className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              {isArabic ? personalInfo.taglineAr : personalInfo.taglineEn}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/201118397123?text=${encodeURIComponent("Hello, I'd like to work with you!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <Briefcase size={18} />
                {t('hero.cta1')}
              </a>
              <button
                onClick={() => scrollTo('projects')}
                className="btn-outline text-base"
              >
                <ExternalLink size={18} />
                {t('hero.cta2')}
              </button>
              <button
                onClick={onServicesClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-base"
              >
                <Code2 size={18} />
                {t('hero.cta3')}
              </button>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-2 mt-8">
              {['Flutter', 'Dart', 'Android', 'Firebase', 'React', 'TypeScript'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 blur-2xl opacity-30 dark:opacity-50 scale-110" />

              {/* Profile ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 p-1.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-navy-800">
                    <img
                      src={personalInfo.profileImage}
                      alt={isArabic ? personalInfo.nameAr : personalInfo.nameEn}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -end-4 glass-light dark:glass rounded-2xl px-3 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-lg border border-indigo-200 dark:border-indigo-500/30"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-base">📱</span> Mobile Dev
                  </span>
                </motion.div>
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -start-4 glass-light dark:glass rounded-2xl px-3 py-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 shadow-lg border border-cyan-200 dark:border-cyan-500/30"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-base">🎓</span> B.Sc. CommTech
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <button onClick={() => scrollTo('about')} className="flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-500 transition-colors group" aria-label={t('hero.scrollDown')}>
            <span className="text-xs font-medium tracking-widest uppercase">{t('hero.scrollDown')}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:border-indigo-500"
            >
              <ArrowDown size={14} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
