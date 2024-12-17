import { HomeComponentProps, PageProps } from '@/context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import Link from 'next/link';

const Navigation: React.FC<HomeComponentProps | PageProps> = (componentProps) => {
  const listMenu = componentProps.translations?.menu || langUk.menu;
  const lang = componentProps.lang;

  return (
    <nav className="flex w-auto justify-end items-start">
      <ul className="flex justify-end flex-col items-end w-full gap-5 sm:gap-10 relative z-10">
        {listMenu.map((item, index) => (
          <li key={index}>
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
