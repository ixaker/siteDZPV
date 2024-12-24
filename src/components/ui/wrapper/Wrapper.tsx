import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const theme = useTheme();
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;

  return (
    <div
      className="relative z-10 px-4 mx-auto my-0 sm:mx-0 md:mr-2 py-10 max-w-[90%] md:max-w-[75%] "
      style={{ background: bgColor }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
