import React from 'react';

const tiers = [
  { name: 'Launchpad', price: 'AMD rates', features: ['AMD rates', 'Core Web Apps', 'Miniinological Features', 'New Sonics', 'Minimal Features'] },
  { name: 'Core Web App', price: 'AMD rates', features: ['AND features', 'Core Web Apps', 'Miniinological Features', 'New Sonics', 'Minimal Features'] },
  { name: 'Elite Portal', price: 'AMD rates', features: ['AND features', 'Core Web Apps', 'Miniinological Features', 'New Sonics', 'Minimal Features'] },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Services & Pricing</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.name} className="border border-gray-800 p-8 rounded-lg hover:border-white transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
            <p className="text-xl font-semibold mb-6 text-gray-400">{tier.price}</p>
            <div className="border-t border-gray-800 my-6"></div>
            <ul className="text-left space-y-4 mb-8 text-gray-300">
              {tier.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}