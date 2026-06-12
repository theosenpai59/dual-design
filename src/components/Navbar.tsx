// src/components/Navbar.tsx
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/src/i18n/routing';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  isTransparent?: boolean;
  hideLogo?: boolean;
}

export default function Navbar({ isTransparent = false, hideLogo = false }: NavbarProps) {
  const nav = useTranslations('nav');

  return (
    <nav className={`
      flex justify-between items-center p-8 max-w-7xl mx-auto w-full z-50
      ${isTransparent ? "absolute left-0 right-0 top-0" : "relative"}
    `}>
      {!hideLogo && (
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Dual Design Logo"
            width={120}    
            height={40}   
            priority       
            className="object-contain"
          />
        </Link>
      )}
      
      <div className={`space-x-8 text-sm uppercase tracking-widest text-gray-400 ${hideLogo ? "mx-auto" : ""}`}>
        <Link href="/services" className="hover:text-white transition">{nav('services')}</Link>          
        <Link href="/works" className="hover:text-white transition">{nav('works')}</Link>          
        <Link href="/about" className="hover:text-white transition">{nav('about')}</Link>         
        <Link href="/contact" className="hover:text-white transition">{nav('contact')}</Link>          
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