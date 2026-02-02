// app/page.tsx  (or pages/index.tsx)
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
    </Layout>
  );
}
