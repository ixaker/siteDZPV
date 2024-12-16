import { PageProps } from '@/context/withStaticPathsAndProps';
import { darkTheme, lightTheme } from '@/theme';
import { Email, Phone, Room } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import CustomButton from '../ui/button/CustomButton';
import Heading from '../ui/typography/Heading';

const DynamicInteractiveMap = dynamic(() => import('@/components/ui/InteractiveMap/InteractiveMap'), {
  ssr: false, // Отключаем SSR для этого компонента
});

const Contacts: React.FC<PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.contactPage;
  const theme = useTheme();
  const listContacts = translationsPage.listContacts;
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;
  const primaryColor = currentTheme.palette.primary.main;
  const bgColor = currentTheme.palette.background.default;

  const requiredItem = (id: string, title: string, description: string) => {
    let href = `tel:${description}`;
    let Icon: React.ElementType = Phone;

    if (id === 'address') {
      href = 'https://maps.app.goo.gl/jPbgbWosaTq8GeNe7';
      Icon = Room;
    } else if (id === 'email') {
      href = `mailto:${description}`;
      Icon = Email;
    }

    return (
      <div className="flex gap-[30px] items-center">
        <a target="_blank" href={href} aria-label={title}>
          <CustomButton
            ariaLabel={title}
            style={{ backgroundColor: primaryColor, boxShadow: `0 10px 30px ${secondaryColor}` }}
            variant="communication-button"
          >
            <Icon className="md:size-[35px] lg:size-[40px] " style={{ color: secondaryColor }} />
          </CustomButton>
        </a>
        <div className="flex flex-col">
          <span className="text-[18px] font-bold md:text-[25px] ">{title}</span>
          <span className="text-[12px] font-extralight md:text-[15px]  ">{description}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="min-w-screen min-h-[calc(100vh-140px)] flex flex-col justify-center pb-[20px] relative z-10"
        style={{ color: secondaryColor }}
      >
        <div className="min-w-screen px-4 py-8 mt-[40px]" style={{ backgroundColor: `${bgColor}e6` }}>
          <Heading level="h1" text={translationsPage.title} alignment="center" />
          <div className="mt-[20px] flex flex-row gap-10 justify-center items-center ">
            <ul className="flex flex-col gap-10 w-auto">
              {listContacts.map((item, index) => (
                <li key={index}>{requiredItem(item.id, item.title, item.description)}</li>
              ))}
            </ul>
            <DynamicInteractiveMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
