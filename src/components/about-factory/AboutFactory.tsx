import * as Shared from '@/shared';

const AboutFactory: React.FC<Shared.HomeComponentProps> = (componentProps) => {
  const aboutFactoryData = componentProps.translationsPage.aboutFactory;

  return (
    <section id="about">
      <Shared.Container className="flex flex-col md:flex-row-reverse gap-[40px] mt-10 ">
        <div className="flex-1">
          <Shared.Heading level="h1" text={aboutFactoryData.title} alignment="left" />
          <ul className="mt-5 flex flex-col gap-5">
            {aboutFactoryData.paragraphs.map((item, index) => (
              <li key={index}>
                <Shared.Paragraph text={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:block flex-1 relative max-h-full w-full max-w-[400px] h-[auto] shadow-[0_0_20px_0_#fff]">
          <Shared.Image
            alt={aboutFactoryData.title}
            src={aboutFactoryData.image}
            fill
            className="object-cover"
          />
        </div>
      </Shared.Container>
    </section>
  );
};

export default AboutFactory;
