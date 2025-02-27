import { withStaticProps, withStaticPaths } from '../../context/withStaticPathsAndProps';
import MainBanner from '@/components/main-banner/MainBanner';
import AboutFactory from '@/components/about-factory/AboutFactory';
import * as Shared from '@/shared';

const Home: React.FC<Shared.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.homePage;
  const componentProps: Shared.HomeComponentProps = { ...restProps, translationsPage };
  return (
    <>
      <Shared.DynamicHead {...componentProps} />
      <MainBanner {...componentProps} />
      <AboutFactory {...componentProps} />
      <Shared.ProductionCapabilities {...componentProps} />
      <Shared.CustomGallery {...componentProps} />
      <Shared.Contacts {...componentProps} />
    </>
  );
};

export const getStaticPaths: Shared.GetStaticPaths = withStaticPaths;
export const getStaticProps: Shared.GetStaticProps = withStaticProps;

export default Home;
