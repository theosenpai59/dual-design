import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    // La classe bg-navy-night n'est plus nécessaire si ton body est déjà bleu nuit via globals.css
    <main className="min-h-screen text-gray-100">
      
      {/* Header */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-white">DUAL DESIGN</div>
        <div className="space-x-8 text-sm uppercase tracking-widest text-gray-400">
          <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>          
          <Link href="/works" className="hover:text-blue-400 transition-colors">Our Works</Link>          
          <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>         
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>          
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        {/* Un petit cercle plus élégant */}
        <div className="w-16 h-16 border border-gray-700 rounded-full flex items-center justify-center mb-8 hover:border-blue-500 transition-colors duration-500">
          <span className="text-xl font-light text-blue-400">D</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
          DUAL DESIGN
        </h1>
        
        <p className="text-lg md:text-xl text-blue-400 tracking-[0.3em] uppercase font-light">
          Engineering Digital Elitism
        </p>

        {/* Bouton d'action rapide pour guider l'utilisateur */}
        <div className="mt-12">
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white text-navy-night font-bold uppercase tracking-widest hover:bg-blue-400 transition-all duration-300"
          >
            Start Project
          </Link>
        </div>
      </section>
    </main>
  );
}