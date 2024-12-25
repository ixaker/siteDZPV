import { RollersPageProps } from '@/context/withStaticPathsAndProps';
import { Heading, Paragraph } from '@/shared';
import InfoCard from '../info-card/InfoCard';

const CharacteristicsRollers: React.FC<RollersPageProps> = (componentProps) => {
  const characteristicsData = componentProps.translationsPage.characteristics;
  const version = componentProps.version;

  return (
    <section className="mt-10">
      <Heading level="h2" text={characteristicsData.heading} alignment="center" />
      {characteristicsData.information.map((item, index) => (
        <div className="mt-10" key={index}>
          <Paragraph text={item.title} />
          <InfoCard
            index={index}
            srcImg={item.image}
            title={item.titleCard}
            version={version}
            list={item.descriptionCard}
            aligntText={index % 2 === 0 ? 'end' : 'start'}
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
          />
        </div>
      ))}
    </section>
  );
};

export default CharacteristicsRollers;
