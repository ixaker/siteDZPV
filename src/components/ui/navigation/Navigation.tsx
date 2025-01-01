import langUk from '../../../../locales/uk.json';
import Link from 'next/link';
import { Translations } from '../../../../locales/types';

interface NavigationProps {
  setIsMenuOpen?: (value: React.SetStateAction<boolean>) => void;
  translations: Translations;
  lang: string;
}

const Navigation: React.FC<NavigationProps> = ({ setIsMenuOpen, translations, lang }) => {
  const listMenu = translations?.menu || langUk.menu;

  return (
    <nav className="flex w-auto justify-end items-start">
      <ul className="flex justify-end flex-col items-end w-full gap-5 sm:gap-7 relative z-10">
        {listMenu.map((item, index) => (
          <li
            onClick={() => {
              if (setIsMenuOpen) setIsMenuOpen(false);
            }}
            key={index}
          >
            <Link
              className=" text-white font-bold hover:text-activeColor transition-all duration-300 ease-in-out text-[18px] md:text-[20] lg:text-[25px] xl:text-[35px] text-nowrap no-underline "
              href={`/${lang}${item.href}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
