import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface HeaderLogoProps {
  logoTranslate: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoTranslate }) => {
  const router = useRouter();
  const { asPath } = router;
  const currentLang = asPath.split('/')[1];

  return (
    <Link href={`/${currentLang}`}>
      <span className="sm:hidden font-semibold text-2xl text-white">{logoTranslate}</span>
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="hidden sm:block sm:size-20"
        priority
      />
    </Link>
  );
};

export default HeaderLogo;
