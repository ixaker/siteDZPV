import React, { useState, useRef } from 'react';
import { Box, Popper, useTheme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import CustomButton from '@/components/ui/button/CustomButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';

const MenuComponent: React.FC<PageProps> = ({ translations, lang }) => {
  const theme = useTheme();
  const menuItems = translations.menu || langUk.menu;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  return (
    <nav className="flex items-center gap-5 sm:gap-[30px] md:gap-[40px] lg:gap-[80px]">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuComponent;
