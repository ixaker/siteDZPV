import { RollersPageProps } from '@/context/withStaticPathsAndProps';
import { Container, Heading, HomeComponentProps } from '@/shared';
import { useEffect, useRef, useState } from 'react';

const ProductionCapabilitiesRow: React.FC<{
  item: { title: string; count: number; unit: string };
  isVisible: boolean;
}> = ({ item, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const animateCount = (
        start: number,
        end: number,
        duration: number,
        callback: (value: number) => void
      ) => {
        const startTime = performance.now();

        const tick = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentValue = Math.floor(progress * (end - start) + start);

          callback(currentValue);

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      };

      animateCount(0, item.count, 2000, setCount);
    }
  }, [isVisible, item.count]);

  return (
    <li className="flex flex-col gap-2 h-auto md:h-[150px]  justify-between">
      <span className="text-[white] text-center w-full text-[18px] md:text-[25px] max-w-[290px]">
        {item.title}
      </span>
      <span className="text-[35px] md:text-[45px] text-activeColor font-semibold text-center">
        {count} {item.unit}
      </span>
    </li>
  );
};

const ProductionCapabilities: React.FC<HomeComponentProps | RollersPageProps> = ({ translationsPage }) => {
  const productionCapabilities = translationsPage.productionCapabilities;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
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
    <Container>
      <div ref={ref} className="mt-10">
        <Heading level="h2" text={productionCapabilities.title} />
        <ul className="mt-10 flex justify-around flex-wrap items-center bg-[#212121] p-5 gap-2">
          {productionCapabilities.list.map((item, index) => (
            <ProductionCapabilitiesRow key={index} item={item} isVisible={isVisible} />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ProductionCapabilities;
