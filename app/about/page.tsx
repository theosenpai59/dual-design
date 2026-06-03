import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Titre */}
        <div className="mb-12">
          <h1 className="text-sm font-bold uppercase tracking-widest mb-2">About Us:</h1>
          <h2 className="text-5xl font-bold">The Agency Blueprint</h2>
        </div>

        {/* Corps du texte */}
        <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
          <p>
            Our Quantum Synergy is a premium, associaty, commuiting and mistral special creators, 
            and noticeslively technmps uclhonorny, ocroated on digital wotherfearn separatation 
            digital, lints, and erigh-toaa in ion-conwrome anal crevcoating full-high nmoleotios.
          </p>

          <p>
            Our Quantum Synergy is a surtate community needed to creeate mall minimors and 
            proretee eotrcesses and ecatement maladad iperovomotations. 
            https://www.ammsynergy.org/quantum-lois/impact and relsos that digital services.
          </p>

          <p>
            Our quantum spiotors can ean en-gresen asso classes rovosones soconal anitycal 
            curiers and missing community for acting techinimates with Quantum synergy 
            submissorning.
          </p>
        </div>

        {/* Section schéma/illustration (placeholder) */}
        <div className="mt-20 border-t border-black pt-10 flex justify-center">
          <div className="w-24 h-24 border border-black flex items-center justify-center">
            <span className="text-xs">Workflow</span>
          </div>
        </div>
      </div>
    </main>
  );
}