import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing'; 
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}


export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white">{t('title')}</h1>
      <p className="text-lg md:text-xl text-blue-400 tracking-[0.3em] uppercase font-light">{t('subtitle')}</p>
      
      <div className="mt-12">
        <Link href="/contact" className="px-8 py-4 border border-blue-400 text-white font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300">
          {t('cta')}
        </Link>
      </div>
    </main>
  );
}