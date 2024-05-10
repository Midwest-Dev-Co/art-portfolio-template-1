import Image from 'next/image';

import LogoHorizontalIcon from '@/assets/icons/brand/Artfolio_Logo-Text-removebg-preview.png';

// * Component: Logo
export default function LogoHorizontal() {
  // * Render
  return (
    <Image
      className="h-6 w-auto"
      src={LogoHorizontalIcon || ''}
      alt={process.env.NEXT_PUBLIC_COMPANY_NAME || 'logo'}
      priority
    />
  );
}
