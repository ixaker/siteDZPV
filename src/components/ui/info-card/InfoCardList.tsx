import * as Shared from '@/shared';
import InfoCard from './InfoCard';

const InfoCardLis: React.FC<Shared.PageProps> = (componentProps) => {
  const infoCard = componentProps.translations.lyttyaMetaluPage.infoCard;
  return (
    <>
      {infoCard.map((item, index) => (
        <div className="flex items-center justify-center" key={index}>
          <InfoCard
            version={componentProps.version}
            aligntText={index % 2 === 0 ? 'end' : 'start'}
            direction={index % 2 === 0 ? 'row-reverse' : 'row'}
            srcImg={item.image}
            title={item.title}
            descriptionCard={!item.list || item.list.length === 0 ? item.description : undefined}
            list={item.list}
          />
        </div>
      ))}
    </>
  );
};

export default InfoCardLis;
