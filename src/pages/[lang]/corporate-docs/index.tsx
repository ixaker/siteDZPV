import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';

const CorporateDox: React.FC<Shared.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.corporateDoxPage;
  const componentProps: Shared.CorporateDoxPageProps = { ...restProps, translationsPage };

  return (
    <>
      <Shared.DynamicHead {...componentProps} />
      <Shared.BackCover>
        <div className="pt-40 flex justify-center sm:justify-between sm:pr-4 pb-10">
          <Shared.Wrapper>
            <Shared.InfoDocs {...translationsPage} />
          </Shared.Wrapper>
          <div className="hidden md:block">
            <Shared.Navigation {...componentProps} />
          </div>
        </div>
      </Shared.BackCover>
    </>
  );
};

export const getStaticPaths: Shared.GetStaticPaths = withStaticPaths;
export const getStaticProps: Shared.GetStaticProps = withStaticProps;

export default CorporateDox;
