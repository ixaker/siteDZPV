import { withStaticProps, withStaticPaths } from '../../context/withStaticPathsAndProps';
import MainBanner from '@/components/main-banner/MainBanner';
import AboutFactory from '@/components/about-factory/AboutFactory';
import OurClients from '@/components/our-clients/OurClients';
import Contacts from '@/components/contacts/Contacts';
import * as Shared from '@/shared';
import Table from '@/components/ui/table/Table';

const Home: React.FC<Shared.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.homePage;
  const componentProps: Shared.HomeComponentProps = { ...restProps, translationsPage };
  return (
    <>
      <Shared.DynamicHead {...componentProps} />
      <MainBanner {...componentProps} />
      <AboutFactory {...componentProps} />
      <Table {...componentProps} />
      <OurClients {...componentProps} />
      <Shared.CustomGallery {...componentProps} />
      <Contacts {...componentProps} />
    </>
  );
};

export const getStaticPaths: Shared.GetStaticPaths = withStaticPaths;
export const getStaticProps: Shared.GetStaticProps = withStaticProps;

export default Home;
