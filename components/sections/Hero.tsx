export default function Hero() {
  return (
    <section className="relative px-6 py-32 md:py-48 lg:py-64 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="space-y-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9]">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
          Elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-4 bg-slate-900 text-white font-bold tracking-widest uppercase text-sm hover:bg-slate-800 transition-colors">
            Start Now
          </button>
          <button className="px-8 py-4 border border-slate-300 text-slate-900 font-bold tracking-widest uppercase text-sm hover:bg-slate-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}