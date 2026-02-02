export default function Features() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            <div className="space-y-4">
               <h3 className="text-6xl font-black tracking-tighter">100+</h3>
               <p className="text-xl text-slate-400 font-light uppercase tracking-widest">Projects Completed</p>
            </div>

            <div className="space-y-4">
               <h3 className="text-6xl font-black tracking-tighter">50M</h3>
               <p className="text-xl text-slate-400 font-light uppercase tracking-widest">Active Users</p>
            </div>

            <div className="space-y-4">
               <h3 className="text-6xl font-black tracking-tighter">99%</h3>
               <p className="text-xl text-slate-400 font-light uppercase tracking-widest">Satisfaction Rate</p>
            </div>
            
        </div>
      </div>
    </section>
  );
}