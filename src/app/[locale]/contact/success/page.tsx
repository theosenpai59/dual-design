import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export default function Success() {
  const t = useTranslations('contact.success');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-navy-night text-white p-6">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-gray-400 mb-8 max-w-md text-center">
        {t('description')}
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 border border-blue-400 text-white font-bold uppercase tracking-widest hover:bg-blue-400 transition-all duration-300"
      >
        {t('backHome')}
      </Link>
    </main>
  );
}