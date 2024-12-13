import CustomButton from '@/components/ui/button/CustomButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC<PageProps> = (restProps) => {
  const router = useRouter();
  const { asPath } = router;
  let supportedLanguages: string[] = restProps.supportedLanguages;

  supportedLanguages = supportedLanguages.filter((val) => val !== 'ru');

  const switchLanguage = (newLang: string) => {
    const newPath = asPath.replace(/^\/[a-z]{2}/, `/${newLang}`);
    router.push(newPath);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className="flex gap-3">
      {supportedLanguages.map((lang) => (
        <CustomButton
          key={lang}
          ariaLabel={`Switch to ${lang}`}
          variant="leng-btn"
          className={`${restProps.lang === lang ? 'text-activeColor text-[white]' : ''}`}
          onClick={() => switchLanguage(lang)}
        >
          {lang.toUpperCase()}
        </CustomButton>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
