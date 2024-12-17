import * as Shared from '@/shared';
import InfoCardLis from '@/components/ui/info-card/InfoCardList';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';

const MainBlock: React.FC<Shared.PageProps> = (componentProps) => {
  const theme = useTheme();
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const translationsPage = componentProps.translations.lyttyaMetaluPage;

  return (
    <div
      className="relative z-10 px-4 mx-auto my-0 sm:mx-0 sm:mr-10 py-10 max-w-[75%]"
      style={{ background: bgColor }}
    >
      <Shared.Heading level="h1" text={translationsPage.heading} style="text-[#ef8535]" />
      <div className="mt-10">
        <div className="flex items-start justify-center w-full">
          <div className="flex gap-5 max-w-[1050px] ">
            <div className="hidden sm:block max-w-[320px] w-full">
              <Shared.Image
                width={100}
                height={100}
                src={`${translationsPage.srcImg}${componentProps.version}`}
                alt={translationsPage.srcImg}
                className=" w-full h-full object-cover "
              />
            </div>
            <div className="w-full gap-4 sm:max-w-[60%] flex flex-col justify-around ">
              <Shared.Heading level="h2" text={translationsPage.title} />
              <Shared.Paragraph text={translationsPage.description} alignment="left" />
            </div>
          </div>
        </div>
      </div>
      <InfoCardLis {...componentProps} />
      <div className="hidden sm:block">
        <Shared.CustomGallery {...translationsPage} />
      </div>
    </div>
  );
};

export default MainBlock;
