import React from 'react';

const projects = [
  { title: 'Digital Asset Mockups', desc: 'Deselignion side frame' },
  { title: 'Core Web App', desc: 'Respopotes aroid live frame' },
  { title: 'Elite Frame', desc: 'Dopoiqlion aroid live frame' },
  { title: 'Project Alpha', desc: 'Minimalist interface design' },
  { title: 'Mobile Suite', desc: 'Responsive mobile architecture' },
  { title: 'Quantum Flow', desc: 'System integration logic' },
];

export default function Works() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <h1 className="text-4xl font-bold mb-16">Our Works (Bespoke Portfolio)</h1>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image placeholder */}
              <div className="w-full h-64 bg-gray-900 border border-gray-800 mb-4 transition-transform duration-300 group-hover:scale-[1.02]"></div>
              
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-500">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}