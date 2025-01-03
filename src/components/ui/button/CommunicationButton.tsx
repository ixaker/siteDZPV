import React from 'react';
import CustomButton from './CustomButton';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface PropsCommunicationButton {
  email: React.ReactNode;
  phone: React.ReactNode;
}

const CommunicationButton: React.FC<PropsCommunicationButton> = ({ email, phone }) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const primaryColor = currentTheme.palette.primary.main;
  const secondaryColor = currentTheme.palette.secondary.main;

  return (
    <div className="flex flex-col gap-3 fixed bottom-12 right-4 z-[99]">
      <a href="mailto:info@qpart.com.ua">
        <CustomButton
          ariaLabel="Send Email"
          style={{
            background: primaryColor,
            color: secondaryColor,
          }}
          variant="communication-button"
          className="!px-[10px] !py-[10px]"
        >
          {email}
        </CustomButton>
      </a>
      <a href="tel:+380989950760">
        <CustomButton
          ariaLabel="Phone"
          style={{
            background: primaryColor,
            color: secondaryColor,
          }}
          variant="communication-button"
          className="!px-[10px] !py-[10px]"
        >
          {phone}
        </CustomButton>
      </a>
      <a target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/+380000000">
        <CustomButton
          ariaLabel="WhatsApp"
          style={{
            background: primaryColor,
            color: secondaryColor,
          }}
          variant="communication-button"
          className="!px-[10px] !py-[10px]"
        >
          <WhatsAppIcon className="!text-[#1f854a]  transition-all duration-300 ease-in-out font-bold size-[35px] md:size-10 lg:size-12" />
        </CustomButton>
      </a>
    </div>
  );
};

export default CommunicationButton;
