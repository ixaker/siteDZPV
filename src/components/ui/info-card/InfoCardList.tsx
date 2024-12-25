import React from 'react';
import { DefaultPage, RollersPageProps } from '@/context/withStaticPathsAndProps';
import InfoCard from './InfoCard';

interface CombinedPageProps {
  version: DefaultPage['version'];
  translationsPage: RollersPageProps['translationsPage'] | DefaultPage['translationsPage'];
}

interface InfoCardListProps extends CombinedPageProps {
  variant?: 'first' | 'second';
}

const InfoCardLis: React.FC<InfoCardListProps> = ({ variant = 'first', ...componentProps }) => {
  return (
    <>
      {componentProps.translationsPage.infoCard.map((item, index) => (
        <div className="flex items-center justify-center" key={index}>
          <InfoCard
            version={componentProps.version}
            srcImg={item.image}
            title={item.title}
            descriptionCard={!item.list || item.list.length === 0 ? item.description : undefined}
            aligntText={index % 2 !== 0 && variant !== 'first' ? 'start' : 'end'}
            direction={index % 2 !== 0 && variant !== 'first' ? 'row-reverse' : 'row'}
            list={item.list}
            index={index}
          />
        </div>
      ))}
    </>
  );
};

export default InfoCardLis;
