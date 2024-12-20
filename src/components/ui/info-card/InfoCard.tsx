import { useEffect, useRef, useState } from 'react';
import * as Shared from '@/shared';

interface InfoCardProps {
  title: string;
  srcImg: string;
  descriptionCard?: string;
  list?: { description: string }[];
  version: string;
  index: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ srcImg, descriptionCard, title, list, version, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`mt-10 flex w-full max-w-[1300px] transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`flex w-full gap-5 sm:flex flex-col md:flex-row  lg:min-h-[200px] lg:max-h-[auto]`}>
        {/* Image */}
        <div className="relative md:min-w-[200px] md:max-w-[200px] xl:min-w-[300px] xl:max-w-[300px]  2xl:min-w-[400px] 2xl:max-w-[400px]  w-full h-full">
          <Shared.Image
            src={`${srcImg}${version}`}
            alt={srcImg}
            width={100}
            height={100}
            className={`w-full h-full object-cover ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
        </div>
        {/* Text */}
        <div className={`flex  flex-col text-start justify-between md:justify-center gap-5 p-4 md:p-0`}>
          <Shared.Heading level="h2" text={`${index + 1}. ${title}`} />
          {list && list.length > 0 ? (
            <ul>
              {list.map((item, index) => (
                <li key={index}>
                  <Shared.Paragraph
                    text={`\u2022 ${item.description}`}
                    style={`transition-opacity duration-700 delay-[100ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  />
                </li>
              ))}
            </ul>
          ) : (
            descriptionCard && (
              <Shared.Paragraph
                text={descriptionCard}
                style={`transition-opacity duration-700 delay-[200ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
