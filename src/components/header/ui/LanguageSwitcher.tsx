import CustomButton from '@/components/ui/button/CustomButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import clsx from 'clsx';

const LanguageSwitcher: React.FC<PageProps> = (restProps) => {
  const router = useRouter();
  const { asPath } = router;
  const supportedLanguages: string[] = restProps.supportedLanguages;

  const switchLanguage = (newLang: string) => {
    const newPath = asPath.startsWith(`/${restProps.lang}`)
      ? asPath.replace(`/${restProps.lang}`, `/${newLang}`)
      : `/${newLang}${asPath}`;
    router.push(newPath);
    localStorage.setItem('lang', newLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && supportedLanguages.includes(savedLang)) {
      switchLanguage(savedLang);
    }
  }, []);

  if (!supportedLanguages || supportedLanguages.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-3">
      {supportedLanguages.map((lang) => (
        <CustomButton
          key={lang}
          ariaLabel={`Switch to ${lang}`}
          variant="leng-btn"
          className={clsx({
            'text-activeColor text-[white]': restProps.lang === lang,
          })}
          onClick={() => switchLanguage(lang)}
        >
          {lang.toUpperCase()}
        </CustomButton>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
