import { useState, useEffect } from 'react';
import Cursor            from './components/Cursor';
import FilmEdge          from './components/FilmEdge';
import Ticker            from './components/Ticker';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import Gallery           from './components/Gallery';
import Films             from './components/Films';
import InstagramSection  from './components/InstagramSection';
import About             from './components/About';
import Contact           from './components/Contact';
import Footer            from './components/Footer';

const SECTIONS = ['work', 'films', 'about', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('work');

  // Scroll-spy: highlight active nav link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.3 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll reveal for .reveal and .reveal-left elements
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <FilmEdge />
      <Ticker />
      <Navbar activeSection={activeSection} />

      <main className="page-wrap">
        <Hero />
        <Gallery />
        <Films />
        <InstagramSection />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
