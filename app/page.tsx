import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Background from "@/components/ui/Background";
import MotionProvider from "@/components/ui/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <div className="relative isolate min-h-screen overflow-x-clip text-zinc-100 antialiased">
        <Background />
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
