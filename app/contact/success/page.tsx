import React from 'react';
import Link from 'next/link';

export default function Success() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      <h1 className="text-4xl font-bold mb-4">Message Sent!</h1>
      <p className="text-gray-600 mb-8">
        We have received your project brief and will be in touch shortly.
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}