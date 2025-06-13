
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 aurora"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="floating absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
        <div className="floating absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="floating absolute bottom-40 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold mb-4">
            <span className="text-gradient glow">ZAYF</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto rounded-full glow"></div>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-light mb-6 text-muted-foreground">
          Computer Science Engineer
        </h2>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          <span className="text-accent">Turning caffeine into code</span> and 
          <span className="text-primary"> dreams into digital reality</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
            <span className="flex items-center gap-2">
              View My Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
          
          <button className="border border-accent hover:bg-accent hover:text-background text-accent px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
            Let's Connect
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
