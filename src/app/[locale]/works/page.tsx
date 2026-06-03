import { useTranslations } from 'next-intl';

export default function Works() {
  const t = useTranslations('works'); 

  return (
    <main className="min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold mb-12">{t('title')}</h1>
      <div className="grid grid-cols-1 gap-12">
        <div className="border border-gray-800 p-8">
          <h3 className="text-2xl mb-4">{t('item1.title')}</h3>
          <p className="text-gray-400">{t('item1.desc')}</p>
        </div>
        <div className="border border-gray-800 p-8 opacity-50">
          <h3 className="text-2xl mb-4">{t('item2.title')}</h3>
          <p className="text-gray-400">{t('item2.desc')}</p>
        </div>
      </div>
    </main>
  );
}