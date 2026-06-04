import { Link } from '@/src/i18n/routing';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Dual Design. All rights reserved.
        </div>

        <div className="flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
          <Link href="#" className="hover:text-blue-400 transition">Instagram</Link>
          <Link href="#" className="hover:text-blue-400 transition">LinkedIn</Link>
          <Link href="#" className="hover:text-blue-400 transition">GitHub</Link>
          <Link href="#" className="hover:text-blue-400 transition">X</Link>
        </div>

      </div>
    </footer>
  );
}