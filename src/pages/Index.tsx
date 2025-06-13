
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import FloatingNav from '../components/FloatingNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 Zayf. Crafted with passion and a lot of caffeine ☕
        </p>
      </footer>
    </div>
  );
};

export default Index;
