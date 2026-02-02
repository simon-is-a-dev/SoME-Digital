export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
         <div className="text-xl font-black tracking-tighter uppercase mb-4 md:mb-0">
            Brand<span className="text-slate-500">.</span>
         </div>
         <div className="text-sm text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Lorem Ipsum Co. All rights reserved.
         </div>
      </div>
    </footer>
  );
}