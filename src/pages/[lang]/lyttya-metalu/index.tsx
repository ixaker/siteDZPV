import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';

const LyttyaMetalu: React.FC<Shared.PageProps> = (componentProps) => {
  const translationsPage = componentProps.translations.lyttyaMetaluPage;
  return (
    <Shared.BackCover>
      <div className="pt-40 flex justify-between pr-4 pb-10">
        <div className="relative z-50 bg-white px-4">
          <Shared.Heading level="h1" text="Лиття металу" style="text-yellow-400" />
          <div className="mt-10">
            <div className="text-white flex items-start justify-center w-full">
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
                  <Shared.Heading level="h2" text={translationsPage.title} style="text-[black]" />
                  <Shared.Paragraph
                    text={translationsPage.description}
                    alignment="left"
                    style="text-[black]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Shared.Navigation {...componentProps} />
      </div>
    </Shared.BackCover>
  );
};

export const getStaticPaths: Shared.GetStaticPaths = withStaticPaths;
export const getStaticProps: Shared.GetStaticProps = withStaticProps;

export default LyttyaMetalu;
