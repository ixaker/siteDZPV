import { PageProps } from '@/context/withStaticPathsAndProps';
import BackCover from '../ui/back-cover/BackCover';
import ButtonSubmitDrawing from '../ui/button/ButtonSubmitDrawing';
import Navigation from '../ui/navigation/Navigation';

const MainBanner: React.FC<PageProps> = (restProps) => {
  const translationPage = restProps.translations.homePage;
  return (
    <section className="relative ">
      <BackCover>
        <div className="flex  gap-10 flex-col-reverse pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] lg:flex-row lg:justify-between lg:ap-0">
          <div className="flex flex-col items-center md:items-start gap-8 lg:block min-h-[inherit] pb-6 relative z-10">
            <h1 className="text-[20px] text-center md:text-start sm:text-[40px] md:text-[55px] lg:text-[48px] xl:text-[70px] font-semibold max-w-full md:max-w-[70%] text-white">
              {translationPage.title}
            </h1>
            <ButtonSubmitDrawing {...restProps} />
          </div>
          <Navigation {...restProps} />
        </div>
      </BackCover>
    </section>
  );
};

export default MainBanner;
