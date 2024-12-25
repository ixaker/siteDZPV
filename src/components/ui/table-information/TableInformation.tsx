import React, { useState } from 'react';
import { Heading, Image } from '@/shared';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { RollersPageProps } from '@/context/withStaticPathsAndProps';

const TableInformation: React.FC<RollersPageProps> = ({ translationsPage }) => {
  const tableInformation = translationsPage.tableInformation;
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleOpen = (src: string) => {
    setCurrentImage(src);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <section>
      <Heading level="h2" alignment="center" text={tableInformation.title} />
      <div className="flex flex-col md:flex-row gap-3 mt-10">
        {tableInformation.image.map((src, index) => (
          <div key={index} className="relative max-w-1/2">
            <div
              className="absolute top-0 left-0 w-full h-full text-[#ffffff00] cursor-pointer hover:bg-[#78787870] hover:text-[#ffffff] flex items-center justify-center"
              onClick={() => handleOpen(src)}
            >
              <ZoomInIcon style={{ fontSize: '40px' }} />
            </div>
            <Image
              className="w-full h-full object-cover cursor-pointer"
              src={src}
              width={100}
              height={100}
              alt={`Table Photo ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '1000px',
            bgcolor: 'background.paper',
            boxShadow: 24,
          }}
        >
          <Image width={100} height={100} src={currentImage} alt="Expanded view" className="w-full h-auto" />
        </Box>
      </Modal>
    </section>
  );
};

export default TableInformation;
