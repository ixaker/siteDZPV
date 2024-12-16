import { PageProps } from '@/context/withStaticPathsAndProps';

const Navigation: React.FC<PageProps> = (restProps) => {
  const listMenu = restProps.translations.menu;

  return (
    <nav className="flex w-auto justify-center lg:justify-end lg:items-end">
      <ul className="flex justify-between sm:justify-start md:justify-end items-start lg:flex-col md:items-end w-full gap-0 sm:gap-10  relative z-10">
        {listMenu.map((item, index) => (
          <li key={index}>
            <a
              className=" text-white font-bold hover:text-activeColor transition-all duration-300 ease-in-out text-[12px] md:text-[20] lg:text-[25px] xl:text-[40px] text-nowrap no-underline "
              href={`#${item.href}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
