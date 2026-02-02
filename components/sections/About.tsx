export default function About() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-slate-900">
            About Us
          </h2>
          <div className="w-20 h-1 bg-slate-900 mb-8"></div>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="aspect-square bg-slate-200 w-full flex items-center justify-center">
             <span className="text-slate-400 font-bold uppercase tracking-widest">Image Placeholder</span>
        </div>
      </div>
    </section>
  );
}