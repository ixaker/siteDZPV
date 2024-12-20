import { DefaultPage } from '@/context/withStaticPathsAndProps';
import InfoCard from './InfoCard';

const InfoCardLis: React.FC<DefaultPage> = (componentProps) => {
  return (
    <>
      {componentProps.translationsPage.infoCard.map((item, index) => (
        <div className="flex items-center justify-center" key={index}>
          <InfoCard
            version={componentProps.version}
            srcImg={item.image}
            title={item.title}
            descriptionCard={!item.list || item.list.length === 0 ? item.description : undefined}
            list={item.list}
            index={index}
          />
        </div>
      ))}
    </>
  );
};

export default InfoCardLis;
