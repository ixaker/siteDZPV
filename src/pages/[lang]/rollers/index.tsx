import Contacts from '@/components/contacts/Contacts';
import CastIronRolls from '@/components/ui/cast-iron-rolls/CastIronRolls';
import CharacteristicsRollers from '@/components/ui/characteristics/CharacteristicsRollers';
import InfoCardLis from '@/components/ui/info-card/InfoCardList';
import ProductionCapabilities from '@/components/ui/production-capabilities/ProductionCapabilities';
import TableInformation from '@/components/ui/table-information/TableInformation';
import CustomTable from '@/components/ui/table/CustomTable';
import Wrapper from '@/components/ui/wrapper/Wrapper';
import { RollersPageProps, withStaticPaths, withStaticProps } from '@/context/withStaticPathsAndProps';
import * as Shared from '@/shared';

const Rollers: React.FC<Shared.PageProps> = ({ ...restProps }) => {
  const translationsPage = restProps.translations.rollersPage;
  const componentProps: RollersPageProps = { ...restProps, translationsPage };
  return (
    <>
      <Shared.BackCover>
        <div className="pt-40 flex justify-center sm:justify-between sm:pr-4 pb-10">
          <Wrapper>
            <Shared.Heading text={translationsPage.heading} style="text-[#ef8535]" level="h1" />
            <InfoCardLis variant="second" {...componentProps} />
            <CharacteristicsRollers {...componentProps} />
            <CustomTable {...componentProps} />
            <ProductionCapabilities {...componentProps} />
            <CastIronRolls {...componentProps} />
            <TableInformation {...componentProps} />

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

export default Rollers;
