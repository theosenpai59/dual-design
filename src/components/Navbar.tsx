import { getTranslations } from 'next-intl/server';
import { Link } from '@/src/i18n/routing';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default async function Navbar({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'nav' });

  const navLinks = [
    { href: '/services', label: t('services') },
    { href: '/works', label: t('works') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto w-full relative z-40">
      <Link href="/" className="flex items-center shrink-0">
        <Image src="/logo.png" alt="Dual Design" width={110} height={35} priority className="object-contain" />
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="hover:text-white transition">{link.label}</Link>
        ))}
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu links={navLinks} />
    </nav>
  );
}