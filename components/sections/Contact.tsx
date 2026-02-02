export default function Contact() {
  return (
    <section className="py-32 bg-white flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 uppercase">
        Ready to start?
      </h2>
      <p className="text-xl text-slate-500 max-w-2xl mb-12 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact us today.
      </p>
      <a href="mailto:hello@example.com" className="text-2xl md:text-4xl font-bold text-slate-900 border-b-4 border-slate-900 hover:text-slate-700 hover:border-slate-700 transition-colors">
        hello@example.com
      </a>
    </section>
  );
}