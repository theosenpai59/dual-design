import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing'; 

export default function Home() {
  const t = useTranslations('home');
  const nav = useTranslations('nav');

  return (
    <main className="min-h-screen text-gray-100">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-white">DUAL DESIGN</div>
        <div className="space-x-8 text-sm uppercase tracking-widest text-gray-400">
          <Link href="/services" className="hover:text-white transition">{nav('services')}</Link>          
          <Link href="/works" className="hover:text-white transition">{nav('works')}</Link>          
          <Link href="/about" className="hover:text-white transition">{nav('about')}</Link>         
          <Link href="/contact" className="hover:text-white transition">{nav('contact')}</Link>          
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <div className="w-16 h-16 border border-gray-700 rounded-full flex items-center justify-center mb-8 hover:border-blue-500 transition-colors duration-500">
          <span className="text-xl font-light text-blue-400">D</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white">{t('title')}</h1>
        <p className="text-lg md:text-xl text-blue-400 tracking-[0.3em] uppercase font-light">{t('subtitle')}</p>
        <div className="mt-12">
          <Link href="/contact" className="px-8 py-4 border border-blue-400 text-white font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300">
            {t('cta')}
          </Link>
        </div>
      </section>
    </main>
  );
}