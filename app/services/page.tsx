import React from 'react';

const tiers = [
  { 
    name: 'Tier 1: One-Page / Promo Landing Pages', 
    price: '180 000 AMD', 
    features: ['Sub-2s mobile loading optimization', 'Regional carrier integration', 'Integrated Yandex & Google Maps', 'Floating social widgets'] 
  },
  { 
    name: 'Tier 2: Standard Corporate / Business (5-10 Pages)', 
    price: '420 000 AMD', 
    features: ['Rigid multi-language structure', 'AM / RU / EN localization', 'Google.am SEO mapping', 'Multi-step booking engines'] 
  },
  { 
    name: 'Tier 3: E-Commerce Store', 
    price: '850 000 AMD', 
    features: ['Payment gateway implementation', 'Dynamic shipping logic', 'Advanced logistics flow', 'Full API documentation'] 
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-navy-night text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Services & Pricing</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.name} className="border border-gray-700 p-8 rounded-lg hover:border-blue-500 transition-colors duration-300">
            <h2 className="text-xl font-bold mb-4 min-h-[60px]">{tier.name}</h2>
            <p className="text-3xl font-bold mb-6 text-blue-400">{tier.price}</p>
            <div className="border-t border-gray-700 my-6"></div>
            <ul className="text-left space-y-4 mb-8 text-gray-300 text-sm">
              {tier.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button className="px-8 py-4 border border-blue-400 text-white font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}