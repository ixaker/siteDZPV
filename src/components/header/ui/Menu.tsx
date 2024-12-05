import React from 'react';
import { PageProps } from '@/context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';

const MenuComponent: React.FC<PageProps> = ({ translations }) => {
  const menuItems = translations?.menu || langUk.menu;

  return (
    <nav>
      <ul className="flex flex-col gap-10 ">
        {menuItems.map((item, index) => (
          <li className="text-end" key={index}>
            <a
              className="text-[white] font-bold text-2xl hover:text-activeColor transition-all duration-300 ease-in-out"
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

export default MenuComponent;
