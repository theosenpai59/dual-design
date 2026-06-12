'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isWorksPage =
    pathname.endsWith('/works');

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