import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Titre */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">WHY DUAL DESIGN?</h2>
        </div>

        {/* Corps du texte */}
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-gray-400">
           Traditional IT agencies move slow. They quote you months of development time, 
           leave your platform vulnerable, and bury your overhead in complex code you don’t own.
          </p>

          <p className="text-white font-medium border-l-2 border-blue-500 pl-4">
            We operate differently. Dual Design is a high-velocity, full-stack digital asset agency.
            We fuse elite frontend UI/UX engineering with rock-solid, secure backend architectures 
            to deploy premium business platforms in 7 to 10 days flat.
          </p>
          
          <h3 className="text-xl font-bold text-blue-400 mt-10">THE DUAL DESIGN FRAMEWORK</h3>
          
          <div className="space-y-6">
            <p>
              <strong className="text-white">⚡ Elite Velocity :</strong><br/>
              We don't waste time on legacy workflows. Our cross-functional full-stack squad 
              builds your custom frontend canvas and backend logic simultaneously.
            </p>

            <p>
              <strong className="text-white">🔒 Enterprise Shield :</strong><br/>
              Say goodbye to vulnerable plugins. Backed by multi-million dollar global infrastructure, 
              your platform features built-in, banking-grade cybersecurity.
            </p>

            <p>
              <strong className="text-white">🌍 Multi-Language Localization :</strong><br/>
              Engineered natively to expand your global reach across Armenian, Russian, English, and French.
            </p>
          </div>
        </div>

        {/* Section Workflow */}
        <div className="mt-20 border-t border-gray-700 pt-10 flex justify-center">
          <div className="w-24 h-24 border border-gray-700 flex items-center justify-center text-gray-500">
            <span className="text-xs uppercase tracking-widest">Workflow</span>
          </div>
        </div>
      </div>
    </main>
  );
}