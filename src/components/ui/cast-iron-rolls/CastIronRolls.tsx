import { RollersPageProps } from '@/context/withStaticPathsAndProps';
import { Heading, Image } from '@/shared';
import { useTheme } from '@mui/material';

const CastIronRolls: React.FC<RollersPageProps> = ({ translationsPage }) => {
  const theme = useTheme();
  const currentTheme = theme.palette.mode === 'dark';
  return (
    <div className="mt-10 relative">
      <Heading level="h2" alignment="center" text={translationsPage.castIronRolls.title} />
      <Image
        src={`${currentTheme ? translationsPage.castIronRolls.imageBlackTheme : translationsPage.castIronRolls.imageWhiteTheme}`}
        alt={`Photo: ${translationsPage.castIronRolls.title}`}
        width={100}
        height={100}
        className="w-full"
      />
    </div>
  );
};

export default CastIronRolls;
