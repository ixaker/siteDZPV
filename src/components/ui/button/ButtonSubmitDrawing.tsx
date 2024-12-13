import * as React from 'react';
import CustomButton from './CustomButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import ModalWindow from '../modal-window/ModalWindow';

const ButtonSubmitDrawing: React.FC<PageProps> = (restProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <div>
      <CustomButton variant="send-btn" onClick={handleOpen}>
        {restProps.translations.btnSend}
      </CustomButton>
      <ModalWindow open={open} setOpen={setOpen} translations={restProps.translations} />
    </div>
  );
};

export default ButtonSubmitDrawing;
