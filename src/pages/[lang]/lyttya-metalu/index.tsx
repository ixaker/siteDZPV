import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';
import MainBlock from '../../../components/ui/main-block/MainBlock';

const LyttyaMetalu: React.FC<Shared.PageProps> = (componentProps) => {
  const translationsPage = componentProps.translations.lyttyaMetaluPage;
  return (
    <>
      <Shared.BackCover>
        <div className="pt-40 flex justify-center sm:justify-between sm:pr-4 pb-10">
          <MainBlock {...componentProps} />
          <div className="hidden md:block">
            <Shared.Navigation {...componentProps} />
          </div>
        </div>
      </Shared.BackCover>
      <div className="block sm:hidden">
        <Shared.CustomGallery {...translationsPage} />
      </div>
    </>
  );
};

export const getStaticPaths: Shared.GetStaticPaths = withStaticPaths;
export const getStaticProps: Shared.GetStaticProps = withStaticProps;

export default LyttyaMetalu;
