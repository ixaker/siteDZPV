import { PageProps } from '@/context/withStaticPathsAndProps';
import Heading from '../ui/typography/Heading';
import Image from 'next/image';
import Paragraph from '../ui/typography/Paragraph';

const AboutFactory: React.FC<PageProps> = (restProps) => {
  const translationsPage = restProps.translations.aboutFactory;
  return (
    <section id="about" className="flex gap-[40px] px-4 mt-10 max-w-[1400px] my-0 mx-auto">
      <div className="flex-1">
        <Heading level="h1" text={translationsPage.title} alignment="left" />
        <ul className="mt-5 flex flex-col gap-5">
          {translationsPage.paragraphs.map((item, index) => (
            <li key={index}>
              <Paragraph text={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative max-h-full w-full max-w-[400px] h-[auto] shadow-[0_0_20px_0_#fff]">
        <Image alt={translationsPage.title} src={translationsPage.image} fill className="object-cover " />
      </div>
    </section>
  );
};

export default AboutFactory;
