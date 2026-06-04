import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export default function ServicesMore() {
  const t = useTranslations('servicesMore');
  const nav = useTranslations('nav');

  return (
    <main className="min-h-screen text-gray-100 p-8 max-w-4xl mx-auto">

      <h1 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter text-white">
        {t('title')}
      </h1>

      <div className="space-y-16">
        {['tier1', 'tier2', 'tier3'].map((tier) => (
          <section key={tier} className="border-l-2 border-blue-500 pl-8 transition-all hover:border-blue-400">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {t(`${tier}.title`)}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t(`${tier}.desc`)}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link 
          href="/contact" 
          className="inline-block px-10 py-4 border border-blue-400 text-white font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300"
        >
          {nav('contact')}
        </Link>
      </div>
    </main>
  );
}