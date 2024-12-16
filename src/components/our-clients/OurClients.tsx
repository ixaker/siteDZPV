import Heading from '../ui/typography/Heading';
import MetinvestIcon from './custom-icons/MetinvestIcon';
import EvrazIcon from './custom-icons/EvrazIcon';
import ArcelorMittal from './custom-icons/ArcelorMittal';
import Container from '../ui/container/Container';
import { HomePage } from '../../../locales/types';

const OurClients: React.FC<HomePage> = (componentProps) => {
  const ourClients = componentProps.ourClients;

  return (
    <section className="mt-[70px]">
      <Container>
        <Heading level="h1" text={ourClients} />
      </Container>
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
