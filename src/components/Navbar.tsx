'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  isTransparent?: boolean;
  hideLogo?: boolean;
}

export default function Navbar({
  isTransparent = false,
  hideLogo = false
}: NavbarProps) {
  const nav = useTranslations('nav');

  const navLinks = [
    { href: '/services', label: nav('services') },
    { href: '/works', label: nav('works') },
    { href: '/about', label: nav('about') },
    { href: '/contact', label: nav('contact') },
  ];

  return (
    <nav
      className={`
        flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto w-full z-50
        ${isTransparent ? 'absolute left-0 right-0 top-0' : 'relative'}
      `}
    >
      {!hideLogo && (
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Dual Design"
            width={110}
            height={35}
            priority
            className="object-contain"
          />
        </Link>
      )}

      <div
        className={`
          hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-400
          ${hideLogo ? 'mx-auto' : ''}
        `}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <MobileMenu links={navLinks} />
    </nav>
  );
}