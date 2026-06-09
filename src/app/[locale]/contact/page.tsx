import { getTranslations } from 'next-intl/server';
import ContactForm from '@/src/components/ContactForm';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <main className="max-w-2xl mx-auto py-20 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-4">Start your project</h1>
        <p className="text-gray-400">Tell us about your vision. We'll get back to you within 24 hours.</p>
      </div>
      
      <ContactForm 
        placeholderName={t('namePlaceholder')}
        placeholderPhone={t('phonePlaceholder')}
        placeholderEmail={t('emailPlaceholder')}
        placeholderBrief={t('briefPlaceholder')}
        btnSending={t('sending')}
        btnSend={t('send')}
      />
    </main>
  );
}