import { Heading, Image } from '@/shared';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const TableInformation = () => {
  return (
    <section>
      <Heading level="h2" alignment="center" text={`АТ "Дніпропетровський завод прокатних валків"`} />
      <div className="flex flex-col md:flex-row gap-3 mt-10">
        <div className="relative max-w-1/2 ">
          <div className="absolute top-0 left-0 w-full h-full text-[#ffffff00] cursor-pointer hover:bg-[#78787870] hover:text-[#ffffff] flex items-center justify-center">
            <ZoomInIcon />
          </div>
          <Image
            className="w-full  object-cover "
            src="/assets/table-photo-ru1.webp"
            width={100}
            height={100}
            alt="Table Photo"
          />
        </div>
        <div className="max-w-1/2 ">
          <Image
            className="w-full z-0 object-cover cursor-pointer"
            width={100}
            height={100}
            src="/assets/table-photo-ru2.webp"
            alt="Table Photo"
          />
        </div>
      </div>
    </section>
  );
};

export default TableInformation;
