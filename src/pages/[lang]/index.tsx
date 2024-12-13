import { GetStaticPaths, GetStaticProps } from 'next';
import { withStaticProps, withStaticPaths, PageProps } from '../../context/withStaticPathsAndProps';
import MainBanner from '@/components/main-banner/MainBanner';
import AboutFactory from '@/components/about-factory/AboutFactory';
import OurClients from '@/components/our-clients/OurClients';
import CustomGallery from '@/components/custom-gallery/CustomGallery';

const Home: React.FC<PageProps> = (restProps) => {
  return (
    <>
      <MainBanner {...restProps} />
      <AboutFactory {...restProps} />
      <OurClients {...restProps} />
      <CustomGallery />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = withStaticPaths;
export const getStaticProps: GetStaticProps = withStaticProps;

export default Home;
