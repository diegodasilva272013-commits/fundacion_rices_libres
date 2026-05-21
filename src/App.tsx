import { useEffect } from 'react';
import Lenis from 'lenis';
import Intro from './components/Intro';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoBlock from './components/VideoBlock';
import ContactSection from './components/ContactSection';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import AuthoritySection from './components/AuthoritySection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-x-clip">
      <Intro />
      <Header />
      <main>
        <HeroSection />

        {/* Bloque puente con el video, centrado entre hero (negro) y contacto (gris) */}
        <div className="relative bg-mist">
          <div className="container-x -mt-24 md:-mt-32 pb-16 md:pb-20 relative z-10">
            <VideoBlock />
          </div>
        </div>

        <ContactSection />
        <TrustSection />
        <AboutSection />
        <QuoteSection />
        <AuthoritySection />
      </main>
      <Footer />
    </div>
  );
}
