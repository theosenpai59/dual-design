import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">QUANTUM SYNERGY</div>
        <div className="space-x-8 text-sm uppercase tracking-widest text-gray-400">
<Link href="/services" className="hover:text-white transition">Services</Link>          <a href="#" className="hover:text-white transition">Prices</a>
          <a href="#" className="hover:text-white transition">Our Works</a>
          <a href="#" className="hover:text-white transition">About Us</a>
<Link href="/contact" className="hover:text-white transition">Contact Us</Link>          <a href="#" className="hover:text-white transition">Prices</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-6">
          <span className="text-2xl">Q</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          QUANTUM SYNERGY
        </h1>
        <p className="text-xl text-gray-400 tracking-[0.2em] uppercase">
          Engineering Digital Elitism
        </p>
      </section>
    </main>
  );
}