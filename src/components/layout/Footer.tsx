import { useTranslation } from 'react-i18next';
import { Heart, Code2, Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/config';

export function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const name = isArabic ? personalInfo.nameAr : personalInfo.nameEn;

  const socials = [
    { icon: Github, href: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: socialLinks.twitter, label: 'Twitter/X' },
    { icon: Youtube, href: socialLinks.youtube, label: 'YouTube' },
    { icon: Instagram, href: socialLinks.instagram, label: 'Instagram' },
  ].filter((s) => s.href);

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-navy-900/50 py-12">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-base shadow-lg">
            AR
          </div>

          {/* Name */}
          <p className="text-slate-700 dark:text-slate-300 font-semibold text-lg">{name}</p>

          {/* Social links */}
          {socials.length > 0 && (
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          )}

          {/* Made with */}
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
            <Code2 size={14} />
            <span>{t('footer.madeWith')}</span>
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>{t('footer.by')}</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} {name}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
