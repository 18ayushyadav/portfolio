import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Add a simple cursor follower effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-dark w-full relative">
      {/* Decorative interactive cursor light */}
      <div 
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[100px] opacity-20 bg-primary/30 z-[99]"
        style={{
          transform: 'translate(calc(var(--cursor-x) - 250px), calc(var(--cursor-y) - 250px))',
          transition: 'transform 0.15s ease-out'
        }}
      ></div>

      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
