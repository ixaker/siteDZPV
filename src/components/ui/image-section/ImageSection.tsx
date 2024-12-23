import * as Shared from '@/shared';

interface ImageSectionProps {
  src: string;
  alt: string;
  version: string;
  variant: 'first' | 'second' | 'third';
  isVisible?: boolean;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt, version, variant, isVisible }) => {
  switch (variant) {
    case 'first':
      return (
        <div className="hidden md:block max-w-[350px] h-[450px] w-full">
          <Shared.Image
            width={100}
            height={100}
            src={`${src}${version}`}
            alt={alt}
            className="w-full h-full object-cover shadow-[0_0_20px_11px_#ef8535]"
          />
        </div>
      );
  }
};

export default ImageSection;
