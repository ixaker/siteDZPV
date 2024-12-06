interface NavigationMapProps {
  translationsMenuService: { name: string }[];
  lang: string;
}

const NavigationMap: React.FC<NavigationMapProps> = ({ translationsMenuService = [] }) => {
  return (
    <ul className="flex flex-col gap-10 items-end relative z-10">
      {translationsMenuService.map((item, index) => (
        <li key={index}>
          <a
            className=" text-white font-bold hover:text-activeColor transition-all duration-300 ease-in-out text-4xl text-nowrap no-underline "
            href="#"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMap;
