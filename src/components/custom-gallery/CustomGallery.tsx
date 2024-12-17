import { useRef, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as Shared from '@/shared';
import { PageDefault } from '../../../locales/types';

const CustomGallery: React.FC<Shared.HomePage | PageDefault> = (componentProps) => {
  const galleryData = componentProps.gallery;
  const listPhotos = galleryData.listPhotos;
  const [currentIndex, setCurrentIndex] = useState(NaN);
  const changesPhoto = (e: React.MouseEvent<HTMLButtonElement>, direction: number) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + direction + listPhotos.length) % listPhotos.length);
  };

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Количество пикселей, на которое прокручиваем
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section className="mt-11 rounded-lg" id="gallery">
      <Shared.Container>
        <Shared.Heading level="h1" text={galleryData.title} />
      </Shared.Container>
      <div
        className="flex gap-0 justify-between px-3"
        style={{
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth', // Плавный скроллинг
          WebkitOverflowScrolling: 'touch', // Дополнительно для тачскринов
        }}
      >
        <button onClick={() => scroll('left')} className="rounded border-1">
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex gap-5 scroll-pl-0 snap-x overflow-x-scroll py-10 px-3 scrollbar-custom"
        >
          {listPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex min-w-[14em] w-[auto] sm:min-w-[337px] snap-center relative cursor-pointer overflow-hidden border-2 border-gray-600 rounded-lg hover:scale-105 hover:border-yellow-500 transition-transform duration-300"
              onClick={() => setCurrentIndex(index)}
            >
              <Shared.Image
                src={photo.prev}
                alt={`Photo ${index + 1}`}
                width={337}
                height={224}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')}>
          <ArrowBackIosIcon fontSize="large" sx={{ rotate: '180deg' }} />
        </button>
      </div>

      {!Number.isNaN(currentIndex) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]"
          onClick={() => setCurrentIndex(NaN)}
        >
          <button onClick={(e) => changesPhoto(e, -1)} className="h-full">
            <ArrowBackIosIcon fontSize="large" sx={{ color: 'white' }} />
          </button>
          <div className="relative max-w-4xl max-h-[80vh]">
            <Shared.Image
              src={listPhotos[currentIndex].full}
              alt="Selected"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <button onClick={(e) => changesPhoto(e, 1)} className="h-full">
            <ArrowBackIosIcon fontSize="large" sx={{ rotate: '180deg', color: 'white' }} />
          </button>
        </div>
      )}
    </section>
  );
};

export default CustomGallery;
