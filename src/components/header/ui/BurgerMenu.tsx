import { Navigation, PageProps } from '@/shared';
import CloseIcon from '@mui/icons-material/Close';
import LanguageSwitcher from './LanguageSwitcher';
import React from 'react';

interface BurgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  restProps: PageProps;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ restProps, isMenuOpen, toggleMenu, setIsMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <div onClick={() => toggleMenu()} className="bg-inherit fixed top-0 left-0 w-screen h-screen"></div>
      )}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 p-5 bg-[rgb(70_70_70_/_17%)] backdrop-blur-2xl w-[60%] h-screen transition-transform duration-300 ease-in-out transform z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center">
          <LanguageSwitcher supportedLanguages={restProps.supportedLanguages} currentLang={restProps.lang} />
          <button onClick={() => toggleMenu()} aria-label="Close Menu">
            <CloseIcon fontSize="large" sx={{ color: 'white' }} />
          </button>
        </div>
        <div className="pt-5">
          <Navigation
            lang={restProps.lang}
            translations={restProps.translations}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
