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
  if (variant === 'first') {
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
  }

  if (variant === 'second') {
    return (
      <>
        {componentProps.translationsPage.infoCard.map((item, index) => (
          <div className="flex items-center justify-center" key={index}>
            <InfoCard
              version={componentProps.version}
              srcImg={item.image}
              title={item.title}
              descriptionCard={!item.list || item.list.length === 0 ? item.description : undefined}
              aligntText={index % 2 === 0 ? 'end' : 'start'}
              direction={index % 2 === 0 ? 'row' : 'row-reverse'}
              list={item.list}
              index={index}
            />
          </div>
        ))}
      </>
    );
  }

  return null;
};

export default InfoCardLis;
