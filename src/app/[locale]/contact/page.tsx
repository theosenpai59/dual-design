'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    setLoading(false);
    router.push('/contact/success'); 
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input name="name" required className="border border-black p-3 w-full" placeholder="Name" />
      <input name="phone" className="border border-black p-3 w-full" placeholder="Phone" />
      <input name="email" required type="email" className="border border-black p-3 w-full" placeholder="Email" />
      <textarea name="message" required className="border border-black p-3 w-full" rows={6} placeholder="Project Brief" />
      
      <button disabled={loading} className="w-full bg-black text-white py-4 uppercase tracking-widest">
        {loading ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}