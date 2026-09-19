import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useLanguage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const changeLanguage = (lang: 'en' | 'ar') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const toggle = () => changeLanguage(isArabic ? 'en' : 'ar');

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isArabic]);

  return { language: i18n.language, isArabic, changeLanguage, toggle };
}
