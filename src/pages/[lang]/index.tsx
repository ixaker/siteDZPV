import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import MainBanner from '@/components/main-banner/MainBanner';
import AboutFactory from '@/components/about-factory/AboutFactory';
import OurClients from '@/components/our-clients/OurClients';
import CustomGallery from '@/components/custom-gallery/CustomGallery';
import Contacts from '@/components/contacts/Contacts';

const Home: React.FC<PageProps> = (restProps) => {
  const translationPage = restProps.translations.homePage;
  return (
    <>
      <MainBanner {...restProps} />
      <AboutFactory {...restProps} />
      <OurClients {...restProps} />
      <CustomGallery photos={translationPage.gallery} />
      <Contacts {...restProps} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
