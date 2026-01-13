import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FluidBackground from "@/components/ui/FluidBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-24">
      {/* Background */}
      <FluidBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Navbar />
        
        <div className="container-custom">
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
