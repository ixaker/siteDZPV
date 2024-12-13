import { useState } from 'react';
import Image from 'next/image';

import Heading from '../ui/typography/Heading';

const photos: string[] = [
  '/assets/gallery-photo1.webp',
  '/assets/gallery-photo2.webp',
  '/assets/gallery-photo4.webp',
  '/assets/gallery-photo5.webp',
  '/assets/gallery-photo3.webp',
];

export default function CustomGallery() {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <div className="px-6 mt-11 rounded-lg">
      <div className="max-w-[1400px] px-4 my-0 mx-auto">
        <Heading level="h1" text="Галерея" />
      </div>
      <div
        className="flex gap-5 scroll-pl-6 snap-x overflow-x-scroll py-10 scrollbar-custom px-10"
        style={{
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth', // Плавный скроллинг
          WebkitOverflowScrolling: 'touch', // Дополнительно для тачскринов
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="min-w-[400px] snap-center relative cursor-pointer overflow-hidden border-2 border-gray-600 rounded-lg hover:scale-105 hover:border-yellow-500 transition-transform duration-300"
            onClick={() => setSelectedImage(photo)}
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage('')}
        >
          <div className="relative max-w-4xl max-h-[80vh]">
            <Image src={selectedImage} alt="Selected" width={800} height={600} className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" */
}
