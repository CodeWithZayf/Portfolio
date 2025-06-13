
import React, { useState, useEffect } from 'react';

const FloatingNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className={`relative transition-all duration-300 ${isExpanded ? 'scale-100' : 'scale-100'}`}>
        {/* Expanded Menu */}
        <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}>
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-16 h-16 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 glow group ${
            isExpanded ? 'rotate-45' : ''
          }`}
        >
          <div className="relative">
            <div className={`w-1 h-6 bg-white rounded-full transition-all duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            <div className={`w-6 h-1 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300`} />
          </div>
        </button>

        {/* Active Section Indicator */}
        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center space-y-2">
            {navItems.map((item) => (
              <div
                key={item.id}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'bg-primary scale-150' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
