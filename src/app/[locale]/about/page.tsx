import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">{t('title')}</h2>
        </div>

        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-gray-400">{t('text1')}</p>
          <p className="text-white font-medium border-l-2 border-blue-500 pl-4">{t('text2')}</p>
          
          <h3 className="text-xl font-bold text-blue-400 mt-10">{t('framework')}</h3>
          
          <div className="space-y-6">
            <p><strong className="text-white">⚡ {t('velocity')}</strong></p>
            <p><strong className="text-white">🔒 {t('shield')}</strong></p>
            <p><strong className="text-white">🌍 {t('localization')}</strong></p>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-700 pt-10 flex justify-center">
          <div className="w-24 h-24 border border-gray-700 flex items-center justify-center text-gray-500">
            <span className="text-xs uppercase tracking-widest">{t('workflow')}</span>
          </div>
        </div>
      </div>
    </main>
  );
}