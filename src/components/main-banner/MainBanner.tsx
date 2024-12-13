import { PageProps } from '@/context/withStaticPathsAndProps';
import BackCover from '../ui/back-cover/BackCover';
import ButtonSubmitDrawing from '../ui/button/ButtonSubmitDrawing';
import Navigation from '../ui/navigation/Navigation';

const MainBanner: React.FC<PageProps> = (restProps) => {
  const translationPage = restProps.translations.homePage;
  return (
    <section className="relative ">
      {/* <div className="bg-[#00000054] h-full w-full absolute top-0 left-0 z-0"></div> */}
      <BackCover>
        <div className="flex pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px]  justify-between">
          <div className="min-h-[inherit]  pb-6 relative z-10">
            <h1 className="text-[20px] text-center sm:text-start sm:text-[40px] md:text-[55px] lg:text-[48px] xl:text-[70px] font-semibold max-w-[70%] text-white">
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
