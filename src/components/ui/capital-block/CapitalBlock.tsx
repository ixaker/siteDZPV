import Image from 'next/image';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';
import { PageProps } from '@/context/withStaticPathsAndProps';
import NavigationMap from '../navigation-map/NavigationMap';

interface CapitalBlockrProps {
  title: string;
  description: string;
  srcImg: string;
  txtButton: string;
  translations: PageProps['translations'];
  lang: PageProps['lang'];
}

const CapitalBlock: React.FC<CapitalBlockrProps> = ({ title, description, srcImg, translations, lang }) => {
  const translationsMenuService = translations.menu[0]?.subMenu;
  return (
    <div className="px-6 text-white pt-[130px] md:pt-[150px] lg:pt-[170px] xl:pt-[200px] pb-6">
      <div className="block lg:flex lg:items-start lg:justify-between lg:gap-8 md:flex-row md:gap-16 max-w-full ">
        <div>
          <NavigationMap lang={lang} translationsMenuService={translationsMenuService || []} />
        </div>
        <div className="max-w-[100%] mx-0 my-0 flex gap-5 items-center xl:max-w-[70%] xl:mx-0 xl:my-auto">
          <div className="hidden md:block flex-shrink-0 md:w-[50%] md:h-fill-available lg:w-5/12 lg:h-[400px] shadow-lg rounded-lg overflow-hidden">
            <Image
              src={srcImg}
              alt="lazerna-rizka"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>

          <div className="flex flex-col gap-6 items-center text-center md:text-left md:items-center md:w-7/12 lg:w-7/12">
            <Heading level="h1" text={title} alignment="center" />
            <Paragraph text={description} alignment="center" />
            <ButtonSubmitDrawing lang={lang} translations={translations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalBlock;
