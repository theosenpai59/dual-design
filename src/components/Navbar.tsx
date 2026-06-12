// src/components/Navbar.tsx
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import Image from 'next/image';

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
      </div>
    </nav>
  );
}