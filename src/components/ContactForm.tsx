'use client';
import { useState } from 'react';
import { useRouter } from '@/src/i18n/routing';

type ContactFormProps = {
  placeholderName: string;
  placeholderPhone: string;
  placeholderEmail: string;
  placeholderBrief: string;
  btnSending: string;
  btnSend: string;
};

export default function ContactForm({ placeholderName, placeholderPhone, placeholderEmail, placeholderBrief, btnSending, btnSend }: ContactFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const inputStyle = "w-full bg-transparent border-b border-gray-700 py-4 focus:border-blue-400 outline-none transition-all placeholder-gray-600 text-white";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) router.push('/contact/success');
      else setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input name="name" required className={inputStyle} placeholder={placeholderName} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input name="phone" className={inputStyle} placeholder={placeholderPhone} />
        <input name="email" required type="email" className={inputStyle} placeholder={placeholderEmail} />
      </div>
      <textarea name="message" required className={`${inputStyle} h-32`} placeholder={placeholderBrief} />
      
      <button 
        disabled={loading} 
        className="w-full py-4 border border-blue-400 text-white font-bold uppercase tracking-widest hover:bg-blue-400 transition-all duration-300 disabled:opacity-50"
      >
        {loading ? btnSending : btnSend}
      </button>
    </form>
  );
}