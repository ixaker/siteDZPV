import { HomeComponentProps } from '@/context/withStaticPathsAndProps';
import BackCover from '../ui/back-cover/BackCover';
import ButtonSubmitDrawing from '../ui/button/ButtonSubmitDrawing';
import Navigation from '../ui/navigation/Navigation';

const MainBanner: React.FC<HomeComponentProps> = (componentProps) => {
  const translatiomsPage = componentProps.translationsPage;
  return (
    <section className="relative ">
      <BackCover>
        <div className="flex gap-10 flex-col-reverse pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] lg:flex-row lg:justify-between lg:ap-0">
          <div className="flex flex-col items-center lg:items-start gap-8 lg:block min-h-[inherit] pb-6 relative z-10">
            <h1 className="text-[20px] text-center lg:text-start sm:text-[40px] md:text-[55px] lg:text-[48px] xl:text-[70px] font-semibold max-w-full md:max-w-[70%] text-white">
              {translatiomsPage.title}
            </h1>
            <ButtonSubmitDrawing lang={componentProps.lang} translations={componentProps.translations} />
          </div>
          <Navigation {...componentProps} />
        </div>
      </BackCover>
    </section>
  );
};

export default MainBanner;
