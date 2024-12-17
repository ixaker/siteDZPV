import { GetStaticPaths, GetStaticProps } from 'next';
import {
  withStaticProps,
  withStaticPaths,
  PageProps,
  HomeComponentProps,
} from '../../context/withStaticPathsAndProps';
import MainBanner from '@/components/main-banner/MainBanner';
import AboutFactory from '@/components/about-factory/AboutFactory';
import OurClients from '@/components/our-clients/OurClients';
import CustomGallery from '@/components/custom-gallery/CustomGallery';
import Contacts from '@/components/contacts/Contacts';
import DynamicHead from '@/components/shared/DynamicHead';

const Home: React.FC<PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.homePage;
  const componentProps: HomeComponentProps = { ...restProps, translationsPage };
  return (
    <>
      <DynamicHead {...componentProps} />
      <MainBanner {...componentProps} />
      <AboutFactory {...componentProps.translationsPage} />
      <OurClients {...componentProps.translationsPage} />
      <CustomGallery {...componentProps.translationsPage} />
      <Contacts {...componentProps.translationsPage} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
