import { PageProps } from '@/context/withStaticPathsAndProps';
import Heading from '../ui/typography/Heading';
import MetinvestIcon from './custom-icons/MetinvestIcon';
import EvrazIcon from './custom-icons/EvrazIcon';
import ArcelorMittal from './custom-icons/ArcelorMittal';

const OurClients: React.FC<PageProps> = (restProps) => {
  const translationPage = restProps.translations.ourClients;

  return (
    <section className="mt-[70px]">
      <div className="max-w-[1400px]  px-4 my-0 mx-auto">
        <Heading level="h1" text={translationPage.title} />
      </div>
      <div className=" overflow-x-auto  px-10 py-6 mt-10 bg-[#b3b3b3]">
        <div className="hidden lg:flex flex-row items-center justify-between">
          <MetinvestIcon />
          <EvrazIcon />
          <ArcelorMittal />
        </div>

        <div className="marquee flex gap-16 items-center animate-marquee lg:hidden">
          <MetinvestIcon />
          <EvrazIcon />
          <ArcelorMittal />
          <MetinvestIcon />
          <EvrazIcon />
          <ArcelorMittal />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
