import { withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';

const Rollers: React.FC<Shared.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.rollersPage;
  const componentProps: Shared.RollersPageProps = { ...restProps, translationsPage };
  return (
    <>
      <Shared.DynamicHead {...componentProps} />
      <Shared.BackCover>
        <div className="pt-40 flex justify-center sm:justify-between sm:pr-4 pb-10">
          <Shared.Wrapper>
            <Shared.Heading text={translationsPage.heading} style="text-[#ef8535]" level="h1" />
            <Shared.InfoCardLis variant="second" {...componentProps} />
            <Shared.CharacteristicsRollers {...componentProps} />
            <Shared.CustomTable {...componentProps} />
            <Shared.ProductionCapabilities {...componentProps} />
            <Shared.CastIronRolls {...componentProps} />
            <Shared.TableInformation {...componentProps} />

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

export default Rollers;
