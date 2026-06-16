'use client';

import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';

export default function WorksGrid() {
  const t = useTranslations('works');

  const projects = [
    { id: 'gym', label: t('item1'), image: '/gym.png' },
    { id: 'restaurant', label: t('item2'), image: '/japanese_restaurant.png' },
    { id: 'cafe', label: t('item3'), image: '/cafe_restaurant.png' },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/works/${project.id}`}
          style={{ backgroundImage: `url(${project.image})` }}
          className="relative flex-1 flex items-center justify-center 
                     bg-cover bg-center transition-all duration-700 ease-out 
                     hover:flex-[2] cursor-pointer group"
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

          <span
            className="relative z-10 text-4xl font-bold uppercase tracking-widest text-white 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {project.label}
          </span>
        </Link>
      ))}
    </div>
  );
}