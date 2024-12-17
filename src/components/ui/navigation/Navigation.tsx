import { HomeComponentProps, PageProps } from '@/context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import Link from 'next/link';

interface NavigationProps extends PageProps, HomeComponentProps {
  setIsMenuOpen?: (value: React.SetStateAction<boolean>) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setIsMenuOpen, translations, lang }) => {
  const listMenu = translations?.menu || langUk.menu;

  return (
    <nav className="flex w-auto justify-end items-start">
      <ul className="flex justify-end flex-col items-end w-full gap-5 sm:gap-10 relative z-10">
        {listMenu.map((item, index) => (
          <li
            onClick={() => {
              if (setIsMenuOpen) setIsMenuOpen(false);
            }}
            key={index}
          >
            <Link
              className=" text-white font-bold hover:text-activeColor transition-all duration-300 ease-in-out text-[18px] md:text-[20] lg:text-[25px] xl:text-[40px] text-nowrap no-underline "
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
