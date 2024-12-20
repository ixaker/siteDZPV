import * as Shared from '@/shared';
import InfoCardLis from '@/components/ui/info-card/InfoCardList';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';
import Contacts from '@/components/contacts/Contacts';
import { DefaultPage } from '@/context/withStaticPathsAndProps';

const MainBlock: React.FC<DefaultPage> = ({ ...componentProps }) => {
  const theme = useTheme();
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;

  return (
    <div
      className="relative z-10 px-4 mx-auto my-0 sm:mx-0 md:mr-2 py-10 max-w-[90%] md:max-w-[80%] "
      style={{ background: bgColor }}
    >
      <Shared.Heading level="h1" text={componentProps.translationsPage.heading} style="text-[#ef8535]" />
      <div className="mt-10">
        <div className="flex justify-center w-full">
          <div className="flex gap-10 max-w-[1050px]  justify-between bg-inherit  ">
            <div className="hidden md:block max-w-[350px] h-[450px] w-full">
              <Shared.Image
                width={100}
                height={100}
                src={`${componentProps.translationsPage.srcImg}${componentProps.version}`}
                alt={componentProps.translationsPage.srcImg}
                className=" w-full h-full object-cover shadow-[0_0_20px_11px_#ef8535]"
              />
            </div>
            <div className="w-full gap-4 sm:max-w-[60%] flex flex-col justify-around ">
              <h1 className="uppercase md:text-xl lg:ttext-2xl xl:text-4xl font-semibold">
                {componentProps.translationsPage.title}
              </h1>
              <Shared.Paragraph text={componentProps.translationsPage.description} alignment="left" />
              <div className="hidden lg:flex justify-start">
                <Shared.ButtonSubmitDrawing
                  lang={componentProps.lang}
                  translations={componentProps.translations}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5  justify-center lg:hidden">
          <Shared.ButtonSubmitDrawing lang={componentProps.lang} translations={componentProps.translations} />
        </div>
      </div>
      <InfoCardLis {...componentProps} />
      <div className="hidden sm:block">
        <Shared.CustomGallery {...componentProps} />
      </div>
      <Contacts {...componentProps} />
    </div>
  );
};

export default MainBlock;
