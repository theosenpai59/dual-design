import React from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Engineering Digital Elitism</h1>
          <p className="text-gray-600">Minimal form with a neat native border</p>
        </div>

        {/* Formulaire */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Name</label>
              <input type="text" placeholder="Name" className="border border-black p-3 outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Phone</label>
              <input type="tel" placeholder="Phone" className="border border-black p-3 outline-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input type="email" placeholder="Email" className="border border-black p-3 outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Project Brief</label>
            <textarea placeholder="Project Brief" rows={6} className="border border-black p-3 outline-none"></textarea>
          </div>

          <button type="submit" className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}