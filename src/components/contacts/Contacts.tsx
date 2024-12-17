import { darkTheme, lightTheme } from '@/theme';
import { Email, Phone, Room } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import * as Shared from '@/shared';

const DynamicInteractiveMap = dynamic(() => import('@/components/ui/InteractiveMap/InteractiveMap'), {
  ssr: false, // Отключаем SSR для этого компонента
});

const Contacts: React.FC<Shared.HomePage> = ({ ...restProps }) => {
  const contactData = restProps.contacts;
  const theme = useTheme();
  const listContacts = contactData.listContacts;
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
          <Shared.CustomButton
            ariaLabel={title}
            style={{ backgroundColor: primaryColor, boxShadow: `0 10px 30px ${secondaryColor}` }}
            variant="communication-button"
          >
            <Icon className="md:size-[35px] lg:size-[40px] " style={{ color: secondaryColor }} />
          </Shared.CustomButton>
        </a>
        <div className="flex flex-col">
          <span className="text-[18px] font-bold md:text-[25px] ">{title}</span>
          <span className="text-[12px] font-extralight md:text-[15px]  ">{description}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="contacts">
      <Shared.Container>
        <div className="flex flex-col pb-[20px] relative z-10" style={{ color: secondaryColor }}>
          <div className="min-w-screen mt-[40px]" style={{ backgroundColor: `${bgColor}e6` }}>
            <Shared.Heading level="h1" text={contactData.title} alignment="left" />
            <div className="mt-[40px] flex flex-row-reverse gap-10 justify-center md:justify-between items-center ">
              <ul className="flex flex-col items-start justify-between gap-10 w-auto">
                {listContacts.map((item, index) => (
                  <li key={index}>{requiredItem(item.id, item.title, item.description)}</li>
                ))}
              </ul>
              <DynamicInteractiveMap {...contactData} />
            </div>
          </div>
          <Shared.Paragraph style="mt-10" alignment="center" text={contactData.descriptionContact} />
        </div>
      </Shared.Container>
    </section>
  );
};

export default Contacts;
