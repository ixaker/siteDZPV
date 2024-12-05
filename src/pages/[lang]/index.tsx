import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import ButtonSubmitDrawing from '@/components/ui/button/ButtonSubmitDrawing';
import NavigationMap from '@/components/ui/navigation-map/NavigationMap';

const Home: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsMenuService = translations.menu;
  return (
    <section>
      <BackCover>
        <div className="flex pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] flex justify-between">
          <div className="min-h-[inherit]  pb-6 relative z-10">
            <h1 className="text-[20px] text-center w-full sm:text-start sm:text-[40px] md:text-[55px] lg:text-[48px] xl:text-[70px] font-semibold">
              Лідер виробник прокатних <br /> валків в Україні
            </h1>
            <ButtonSubmitDrawing lang={lang} translations={translations} />
          </div>
          <NavigationMap lang={lang} translationsMenuService={translationsMenuService} />
        </div>
      </BackCover>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
