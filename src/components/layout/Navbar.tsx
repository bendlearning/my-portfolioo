import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Globe, CreditCard } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const SECTION_IDS = ['home', 'about', 'services', 'projects', 'experience', 'skills', 'contact'];

interface NavbarProps {
  onPaymentOpen: () => void;
}

export function Navbar({ onPaymentOpen }: NavbarProps) {
  const { t } = useTranslation();
  const { isDark, toggle: toggleTheme } = useTheme();
  const { isArabic, changeLanguage } = useLanguage();
  const activeSection = useScrollSpy(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-light dark:glass shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-3 group"
              aria-label="Go to home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-105 transition-transform">
                AR
              </div>
              <span className="hidden sm:block font-bold text-slate-800 dark:text-white text-sm lg:text-base">
                Abd El Rahman
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
                  aria-label={t('common.language')}
                >
                  <Globe size={18} />
                </button>
                <AnimatePresence>
                  {langMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute top-full mt-2 end-0 glass-light dark:glass rounded-xl shadow-xl p-1 min-w-[120px]"
                    >
                      {(['en', 'ar'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => { changeLanguage(lang); setLangMenuOpen(false); }}
                          className={`w-full text-start px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            (isArabic ? 'ar' : 'en') === lang
                              ? 'bg-indigo-500 text-white'
                              : 'text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-white/10'
                          }`}
                        >
                          {lang === 'en' ? 'English' : 'العربية'}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
                aria-label={isDark ? t('common.lightMode') : t('common.darkMode')}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Payment CTA */}
              <button
                onClick={onPaymentOpen}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <CreditCard size={16} />
                {t('nav.support')}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 lg:top-20 left-0 right-0 z-40 glass-light dark:glass border-t border-white/10 overflow-hidden"
          >
            <div className="container-max px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-start px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-indigo-500 text-white'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => { onPaymentOpen(); setMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold mt-2"
              >
                <CreditCard size={16} />
                {t('nav.support')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close menus */}
      {(menuOpen || langMenuOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => { setMenuOpen(false); setLangMenuOpen(false); }}
        />
      )}
    </>
  );
}
