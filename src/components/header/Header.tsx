import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';
import ThemeToggleButton from './ui/ThemeToggleButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import MenuIcon from '@mui/icons-material/Menu';
import BurgerMenu from './ui/BurgerMenu';

const Header: React.FC<PageProps> = (restProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative z-20">
      <div className="flex justify-between items-center flex-wrap p-3 bg-inherit w-full absolute">
        <HeaderLogo />
        <div className="flex gap-10 items-center">
          <div className="flex gap-7 items-center">
            <LanguageSwitcher
              supportedLanguages={restProps.supportedLanguages}
              currentLang={restProps.lang}
            />
            <ThemeToggleButton />
            <button
              onClick={toggleMenu}
              aria-label="Open Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="block md:hidden"
            >
              <MenuIcon fontSize="large" sx={{ color: 'white' }} />
            </button>
          </div>
        </div>
      </div>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        restProps={restProps}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;
