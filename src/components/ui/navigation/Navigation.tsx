import { PageProps } from '@/context/withStaticPathsAndProps';

const Navigation: React.FC<PageProps> = (restProps) => {
  const listMenu = restProps.translations.menu;

  return (
    <nav className="flex w-auto justify-end items-end">
      <ul className="flex flex-col items-end w-full gap-10  relative z-10">
        {listMenu.map((item, index) => (
          <li key={index}>
            <a
              className=" text-white font-bold hover:text-activeColor transition-all duration-300 ease-in-out text-[40px] text-nowrap no-underline "
              href="#"
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
