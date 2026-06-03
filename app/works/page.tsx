export default function Works() {
  return (
    <main className="min-h-screen bg-navy-night text-white py-20 px-6">
      <h1 className="text-4xl font-bold mb-12">OUR WORKS</h1>
      
      <div className="grid grid-cols-1 gap-12">
        {/* Placeholder 1 */}
        <div className="border border-gray-800 p-8">
          <h3 className="text-2xl mb-4">THE DUAL DESIGN ECOSYSTEM</h3>
          <p className="text-gray-400">
             Our internal infrastructure. A high-velocity, full-stack digital asset framework 
             built to deploy secure business platforms in under 10 days. 
             (Case study coming soon...)
          </p>
        </div>

        {/* Placeholder 2 */}
        <div className="border border-gray-800 p-8 opacity-50">
          <h3 className="text-2xl mb-4">PROJECT ALPHA (Confidential)</h3>
          <p className="text-gray-400">
             Developing cross-regional logistics and payment solutions for a 
             strategic partner in the Armenian market.
          </p>
        </div>
      </div>
    </main>
  );
}