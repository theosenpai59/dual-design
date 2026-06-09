'use client';
import { useState } from 'react';
import { useRouter } from '@/src/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const inputStyle = "w-full bg-transparent border-b border-gray-700 py-4 focus:border-blue-400 outline-none transition-all placeholder-gray-600 text-white";

  async function handleSubmit(e: any) {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push('/contact/success');
    } else {
      console.error("Erreur lors de l'envoi");
      setLoading(false);
    }
  } catch (error) {
    console.error("Erreur réseau :", error);
    setLoading(false);
  }
}

  return (
    <main className="max-w-2xl mx-auto py-20 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-4">Start your project</h1>
        <p className="text-gray-400">Tell us about your vision. We'll get back to you within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <input name="name" required className={inputStyle} placeholder="NAME" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input name="phone" className={inputStyle} placeholder="PHONE" />
            <input name="email" required type="email" className={inputStyle} placeholder="EMAIL" />
        </div>
        <textarea name="message" required className={`${inputStyle} h-32`} placeholder="PROJECT BRIEF" />
        
        <button 
          disabled={loading} 
          className="w-full py-4 border border-blue-400 text-white font-bold uppercase tracking-widest hover:bg-blue-400 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
    </main>
  );
}