import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
