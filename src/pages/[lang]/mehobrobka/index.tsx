import { DefaultPage, withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';
const Mehoobrobka: React.FC<Shared.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.mehobrobka;
  const componentProps: DefaultPage = { ...restProps, translationsPage };
  return (
    <>
      <Shared.DynamicHead {...componentProps} />
      <Shared.BackCover>
        <div className="pt-40 flex justify-center sm:justify-between sm:pr-4 pb-10">
          <Shared.Wrapper>
            <Shared.InfoBlock {...componentProps} />
            <Shared.InfoCardLis {...componentProps} />
            <div className="hidden sm:block">
              <Shared.CustomGallery {...componentProps} />
            </div>
            <Shared.Contacts {...componentProps} />
          </Shared.Wrapper>
          <div className="hidden md:block">
            <Shared.Navigation {...componentProps} />
          </div>
        </div>
      </Shared.BackCover>
      <div className="block sm:hidden">
        <Shared.CustomGallery {...componentProps} />
      </div>
    </>
  );
};

export const getStaticPaths: Shared.GetStaticPaths = withStaticPaths;
export const getStaticProps: Shared.GetStaticProps = withStaticProps;

export default Mehoobrobka;
