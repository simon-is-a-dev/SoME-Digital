export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter uppercase text-slate-900">
            Brand<span className="text-slate-400">.</span>
        </div>
        <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors">Work</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}