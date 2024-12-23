import { DefaultPage } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';

const InfoBlock: React.FC<DefaultPage> = (componentProps) => {
  const descriptionList = componentProps.translationsPage?.descriptionList || [];
  return (
    <>
      <Shared.Heading level="h1" text={componentProps.translationsPage?.heading} style="text-[#ef8535]" />
      <div className="mt-10 ">
        <div className="flex gap-10 max-w-[1050px] w-full my-0 mx-auto  justify-between bg-inherit">
          <div className="hidden md:block max-w-[350px] h-[450px] w-full">
            <Shared.Image
              width={100}
              height={100}
              src={`${componentProps.translationsPage.srcImg}${componentProps.version}`}
              alt={componentProps.translationsPage.srcImg}
              className="w-full h-full object-cover shadow-[0_0_20px_11px_#ef8535]"
            />
          </div>

          <div className="w-full gap-4 flex flex-col justify-around">
            <h1 className="uppercase md:text-xl lg:ttext-2xl xl:text-4xl font-semibold">
              {componentProps.translationsPage.title}
            </h1>

            {descriptionList.length > 0 ? (
              descriptionList.map((item, index) => (
                <Shared.Paragraph key={index} text={`${'\u2022'} ${item}`} />
              ))
            ) : (
              <Shared.Paragraph text={componentProps.translationsPage.description} alignment="left" />
            )}

            <div className="hidden lg:flex justify-start">
              <Shared.ButtonSubmitDrawing
                lang={componentProps.lang}
                translations={componentProps.translations}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-center lg:hidden">
          <Shared.ButtonSubmitDrawing lang={componentProps.lang} translations={componentProps.translations} />
        </div>
        {/* Навигация */}
      </div>
    </>
  );
};

export default InfoBlock;
