import InfoCard from '@/components/ui/info-card/InfoCard';
import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';

const LyttyaMetalu: React.FC<Shared.PageProps> = (componentProps) => {
  const theme = useTheme();
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;

  const translationsPage = componentProps.translations.lyttyaMetaluPage;
  return (
    <>
      <Shared.BackCover>
        <div className="pt-40 flex justify-between pr-4 pb-10">
          <div className="relative z-10 px-4 mr-10 py-10 max-w-[80%]" style={{ background: bgColor }}>
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
            {/* CARD LIST */}
            {translationsPage.infoCard.map((item, index) => (
              <div className="flex items-center justify-center" key={index}>
                <InfoCard
                  version={componentProps.version}
                  aligntText={index % 2 === 0 ? 'end' : 'start'}
                  direction={index % 2 === 0 ? 'row-reverse' : 'row'}
                  srcImg={item.image}
                  title={item.title}
                  descriptionCard={!item.list || item.list.length === 0 ? item.description : undefined}
                  list={item.list}
                />
              </div>
            ))}
            <div className="hidden sm:block">
              <Shared.CustomGallery {...translationsPage} />
            </div>
          </div>
          <div className="hidden sm:block">
            <Shared.Navigation {...componentProps} />
          </div>
        </div>
      </Shared.BackCover>
      <div className="block sm:hidden">
        <Shared.CustomGallery {...translationsPage} />
      </div>
    </>
  );
};

export const getStaticPaths: Shared.GetStaticPaths = withStaticPaths;
export const getStaticProps: Shared.GetStaticProps = withStaticProps;

export default LyttyaMetalu;
