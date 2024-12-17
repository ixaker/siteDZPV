import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './ui/LanguageSwitcher';
import HeaderLogo from './ui/HeaderLogo';
import ThemeToggleButton from './ui/ThemeToggleButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigation } from '@/shared';
import CloseIcon from '@mui/icons-material/Close';

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
              className="block sm:hidden"
            >
              <MenuIcon fontSize="large" sx={{ color: 'white' }} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div onClick={toggleMenu} className="bg-inherit absolute top-0 left-0 w-screen h-screen"></div>
      )}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 p-5 bg-[rgb(70_70_70_/_17%)] backdrop-blur-2xl w-[60%] h-screen transition-transform duration-300 ease-in-out transform z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center">
          <LanguageSwitcher supportedLanguages={restProps.supportedLanguages} currentLang={restProps.lang} />
          <button onClick={toggleMenu} aria-label="Close Menu">
            <CloseIcon fontSize="large" sx={{ color: 'white' }} />
          </button>
        </div>
        <div className="pt-5">
          <Navigation {...restProps} />
        </div>
      </div>
    </header>
  );
};

export default Header;
