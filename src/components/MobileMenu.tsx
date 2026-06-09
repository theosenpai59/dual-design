'use client';
import { useState } from 'react';
import { Link } from '@/src/i18n/routing';
import { Menu, X } from 'lucide-react'; 

export default function MobileMenu({ links }: { links: { href: string, label: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Bouton Burger */}
      <button onClick={() => setIsOpen(true)} className="text-white p-2">
        <Menu size={28} />
      </button>

      {/* Overlay du Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-8 transition-all duration-300">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-8 text-2xl font-bold uppercase tracking-widest text-gray-400">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}