import Contacts from '@/components/contacts/Contacts';
import InfoBlock from '@/components/ui/Info-block/InfoBlock';
import InfoCardLis from '@/components/ui/info-card/InfoCardList';
import Wrapper from '@/components/ui/wrapper/Wrapper';
import { DefaultPage, withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';

const Mehoobrobka: React.FC<Shared.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.mehobrobka;
  const componentProps: DefaultPage = { ...restProps, translationsPage };
  return (
    <>
      <Shared.BackCover>
        <div className="pt-40 flex justify-center sm:justify-between sm:pr-4 pb-10">
          <Wrapper>
            <InfoBlock {...componentProps} />
            <InfoCardLis {...componentProps} />
            <div className="hidden sm:block">
              <Shared.CustomGallery {...componentProps} />
            </div>
            <Contacts {...componentProps} />
          </Wrapper>
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
