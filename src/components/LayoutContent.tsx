'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isWorksPage = pathname.includes('/works');

  return (
    <div className="bg-navy-night text-gray-100 min-h-screen">
      <Navbar
        isTransparent={isWorksPage}
        hideLogo={isWorksPage}
      />

      <main>{children}</main>

      <Footer />
    </div>
  );
}