export default function Services() {
  const services = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-slate-900">Our Services</h2>
           <p className="text-xl text-slate-500 max-w-2xl font-light">Comprehensive solutions for modern problems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={item} className="p-8 border border-slate-200 hover:border-slate-900 transition-colors group">
              <div className="w-12 h-12 bg-slate-100 mb-6 group-hover:bg-slate-900 transition-colors"></div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-slate-900 group-hover:text-slate-900">Service Name {item}</h3>
              <p className="text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}