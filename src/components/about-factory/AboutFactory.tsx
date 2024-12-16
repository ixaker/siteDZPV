import Heading from '../ui/typography/Heading';
import Image from 'next/image';
import Paragraph from '../ui/typography/Paragraph';
import Container from '../ui/container/Container';
import { HomePage } from '../../../locales/types';

const AboutFactory: React.FC<HomePage> = (componentProps) => {
  const aboutFactoryData = componentProps.aboutFactory;

  return (
    <section id="about">
      <Container className="flex flex-col md:flex-row-reverse gap-[40px] mt-10 ">
        <div className="flex-1">
          <Heading level="h1" text={aboutFactoryData.title} alignment="left" />
          <ul className="mt-5 flex flex-col gap-5">
            {aboutFactoryData.paragraphs.map((item, index) => (
              <li key={index}>
                <Paragraph text={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:block flex-1 relative max-h-full w-full max-w-[400px] h-[auto] shadow-[0_0_20px_0_#fff]">
          <Image alt={aboutFactoryData.title} src={aboutFactoryData.image} fill className="object-cover" />
        </div>
      </Container>
    </section>
  );
};

export default AboutFactory;
