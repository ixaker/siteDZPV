import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import BackCover from '@/components/ui/back-cover/BackCover';
import ButtonSubmitDrawing from '@/components/ui/button/ButtonSubmitDrawing';
import NavigationMap from '@/components/ui/navigation-map/NavigationMap';
import Image from 'next/image';

const Home: React.FC<PageProps> = ({ translations, lang }) => {
  const translationsMenuService = translations.menu;
  return (
    <section>
      <BackCover>
        <div className="flex pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px]  justify-between">
          <div className="min-h-[inherit]  pb-6 relative z-10">
            <h1 className="text-[20px] text-center w-full sm:text-start sm:text-[40px] md:text-[55px] lg:text-[48px] xl:text-[70px] font-semibold max-w-[70%]">
              {translations.title}
            </h1>
            <ButtonSubmitDrawing lang={lang} translations={translations} />
          </div>
          <NavigationMap lang={lang} translationsMenuService={translationsMenuService} />
        </div>
      </BackCover>
      <div className="flex">
        <div className="w-full h-full max-w-[1000px]">
          <Image src="/assets/test.png" width={100} height={100} alt="//" className="h-full w-full" />
        </div>
        <ul>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora quis, cumque non veniam
            obcaecati fugit. Id quisquam consequatur atque doloremque, magni iste, doloribus, vitae
            voluptatibus dolore earum ducimus saepe!
          </li>
          <li>
            Fugit veniam quia, porro ipsum nostrum in molestiae delectus iusto beatae accusamus? Consequatur
            nostrum, fugit perferendis reiciendis iusto, quasi, quos repellendus dolorum nisi suscipit ipsa
            tenetur? Omnis quo quisquam tenetur!
          </li>
          <li>
            Eum atque porro dolorum, est nisi tempore nulla voluptatibus mollitia sed ratione corrupti harum,
            vero facere dolore iure rerum vel cumque expedita, cupiditate libero corporis fuga tenetur ipsum
            nemo! Sequi!
          </li>
          <li>
            Soluta id sit aut? A, eveniet, ullam ratione repudiandae velit, inventore in dolor earum
            exercitationem deleniti eum deserunt porro nihil laborum modi repellat facilis alias neque? Nisi
            sit tenetur culpa!
          </li>
        </ul>
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
