import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import Image from 'next/image';

export default function Navbar() {
  const nav = useTranslations('nav');

  return (
    <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto w-full">
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
      
      <div className="space-x-8 text-sm uppercase tracking-widest text-gray-400">
        <Link href="/services" className="hover:text-white transition">{nav('services')}</Link>          
        <Link href="/works" className="hover:text-white transition">{nav('works')}</Link>          
        <Link href="/about" className="hover:text-white transition">{nav('about')}</Link>         
        <Link href="/contact" className="hover:text-white transition">{nav('contact')}</Link>          
      </div>
    </nav>
  );
}