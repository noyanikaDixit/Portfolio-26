import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { MarqueeStrip } from "@/components/portfolio/MarqueeStrip";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Nav />
      <main>
        <Hero />
        <MarqueeStrip />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
