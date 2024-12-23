// import * as Shared from '@/shared';
// import InfoCardLis from '@/components/ui/info-card/InfoCardList';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
// import Contacts from '@/components/contacts/Contacts';
import { DefaultPage } from '@/context/withStaticPathsAndProps';
import InfoBlock from '../Info-block/InfoBlock';

const MainBlock: React.FC<DefaultPage> = ({ ...componentProps }) => {
  const theme = useTheme();
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;

  return (
    <div
      className="relative z-10 px-4 mx-auto my-0 sm:mx-0 md:mr-2 py-10 max-w-[90%] md:max-w-[80%] "
      style={{ background: bgColor }}
    >
      <InfoBlock {...componentProps} />
      {/* Список информационных карточек */}
      {/* <InfoCardLis {...componentProps} /> */}
      {/* <div className="hidden sm:block">
        <Shared.CustomGallery {...componentProps} />
      </div> */}
      {/* Контакты */}
      {/* <Contacts {...componentProps} /> */}
    </div>
  );
};

export default MainBlock;
