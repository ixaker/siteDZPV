import CustomButton from '@/components/ui/button/CustomButton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface LanguageSwitcherProps {
  supportedLanguages: string[]; // Список поддерживаемых языков
  currentLang: string; // Текущий язык
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, supportedLanguages = [] }) => {
  const router = useRouter();
  const { asPath } = router;
  const [displayLanguages, setDisplayLanguages] = useState<string[]>([]);

  useEffect(() => {
    const defaultLanguages = ['en', 'ua'];
    const browserLang = navigator.language.split('-')[0];

    const languages = [...defaultLanguages];

    if (
      !defaultLanguages.includes(browserLang) &&
      browserLang !== 'ru' &&
      supportedLanguages.includes(browserLang)
    ) {
      languages.push(browserLang);
    }

    setDisplayLanguages(languages);
    console.log('languages', languages);
  }, [supportedLanguages]);

  const switchLanguage = (newLang: string) => {
    if (newLang === 'ua') {
      newLang = 'uk';
    }

    const newPath = asPath.replace(/^\/[a-z]{2}/, `/${newLang}`);

    router.push(newPath);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className="flex gap-3">
      {displayLanguages
        .filter((lang) => lang !== 'uk')
        .map((lang) => (
          <CustomButton
            key={lang}
            ariaLabel={`Switch to ${lang}`}
            variant="leng-btn"
            className={`${currentLang === (lang === 'ua' && 'uk' ? 'uk' : lang) ? 'text-activeColor text-[white]' : ''}`}
            onClick={() => switchLanguage(lang)}
          >
            {lang?.toUpperCase()}
          </CustomButton>
        ))}
    </div>
  );
};

export default LanguageSwitcher;
