import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
const HeaderLogo = () => {
  const router = useRouter();
  const { asPath } = router;
  const currentLang = asPath.split('/')[1];

  return (
    <Link href={`/${currentLang}`}>
      <Image src="/Logo.avif" alt="Logo" width={100} height={100} className="size-20" priority />
    </Link>
  );
};

export default HeaderLogo;
