import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const tiers = [
    { key: 'tier1' },
    { key: 'tier2' },
    { key: 'tier3' },
  ];

  return (
    <main className="min-h-screen bg-navy-night text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.key} className="border border-gray-700 p-8 rounded-lg hover:border-blue-500 transition-colors duration-300">
            <h2 className="text-xl font-bold mb-4 min-h-[60px]">{t(`${tier.key}.name`)}</h2>
            <p className="text-3xl font-bold mb-6 text-blue-400">{t(`${tier.key}.price`)}</p>
            <div className="border-t border-gray-700 my-6"></div>
            <ul className="text-left space-y-4 mb-8 text-gray-300 text-sm">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>• {t(`${tier.key}.f${i}`)}</li>
              ))}
            </ul>
            <button className="w-full py-4 border border-blue-400 text-white font-bold uppercase tracking-widest hover:bg-blue-400 transition-all">
              {t('learnMore')}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}