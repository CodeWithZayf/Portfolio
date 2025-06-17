
import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Zap, Star, Github, Linkedin, SquareCode } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Animated Background with Gradient Overlay - More like huly.io */}
      <div className="absolute inset-0 aurora"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/5 to-background/80"></div>
      
      {/* Floating Elements - More sub      <div className="absolute inset-0">
        <div className="floating absolute top-1/4 left-1/6 w-24 h-24 bg-primary/8 rounded-full blur-xl"></div>
        <div className="floating absolute top-1/3 right-1/6 w-32 h-32 bg-accent/8 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="floating absolute bottom-1/3 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-lg" style={{animationDelay: '4s'}}></div>
        <div className="floating absolute top-2/3 right-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Main Content - Inspired by huly.io's clean layout */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-12"> {/* Added lg:flex-row and gap */}
            {/* Image Placeholder */}
            <div className={`mb-8 lg:mb-0 ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.1s'}}>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden shadow-xl border border-white/10">
                {/* Replace with your image */}
                <img src="/path/to/your/image.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Text Content Column */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl mx-auto">
            {/* Logo Section - Huly.io inspired design */}
            <div className={`mb-8 fade-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.1s'}}>
            <div className="flex items-center justify-center h-14 w-14 rounded-md bg-gradient-to-br from-primary/80 to-accent/80 shadow-lg mb-4 backdrop-blur-sm border border-white/10">
              <span className="text-2xl font-bold text-white">Z</span>
            </div>
          </div>
          
          {/* Title with staggered animation - Huly.io inspired clean typography */}
          <div className={`text-center mb-5 ${isLoaded ? 'slide-up' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
              <span className="text-gradient glow">MD ZAFIR HASAN</span>
            </h1>
            <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-80"></div>
          </div>
          
          {/* Subtitle with clean typography */}
          <h2 className={`text-lg md:text-2xl font-light mb-6 text-foreground/90 ${isLoaded ? 'slide-up' : 'opacity-0'}`} style={{transitionDelay: '0.3s'}}>
            Computer Science Engineer
          </h2>
          
          {/* Description with improved readability - Huly.io inspired concise style */}
          <p className={`text-base md:text-lg mb-6 max-w-xl mx-auto leading-relaxed text-center text-muted-foreground/90 ${isLoaded ? 'slide-up' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}}>
            Crafting elegant digital experiences through
            <span className="text-primary"> innovative code</span> and
            <span className="text-accent"> thoughtful design</span>
          </p>

          {/* New Paragraph Section */}
          <p className={`text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed text-center text-muted-foreground/70 ${isLoaded ? 'slide-up' : 'opacity-0'}`} style={{transitionDelay: '0.45s'}}>
            I'm passionate about building scalable and efficient software solutions that solve real-world problems. My expertise spans front-end and back-end development, with a strong focus on creating intuitive user experiences and robust system architectures.
          </p>

          {/* Social Media Links */}
          <div className={`flex justify-center gap-4 mb-10 ${isLoaded ? 'slide-up' : 'opacity-0'}`} style={{transitionDelay: '0.45s'}}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 hover:text-primary transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 hover:border-accent/30 hover:text-accent transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 hover:text-primary transition-all duration-300">
              <SquareCode className="w-5 h-5" />
            </a>
          </div>

          {/* Feature highlights - Similar to huly.io's clean card design */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 w-full ${isLoaded ? 'slide-up' : 'opacity-0'}`} style={{transitionDelay: '0.5s'}}>
            <div className="flex items-center gap-3 p-4 rounded-md bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary/10 text-primary">
                <Code className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Full-stack Development</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-md bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent/10 text-accent">
                <Zap className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Performance Optimization</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-md bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary/10 text-primary">
                <Star className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Creative Problem Solving</span>
            </div>
          </div>

          {/* CTA Buttons - Huly.io inspired modern design */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isLoaded ? 'slide-up' : 'opacity-0'}`} style={{transitionDelay: '0.6s'}}>
            {/* Download Resume Button */}
            <a href="/path/to/your/resume.pdf" download className="group bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex items-center gap-2">
              <span>Download Resume</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <button className="group bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2">
              <span>View My Work</span>
              <span className="group-hover:translate-x-1 transition-transform text-white/90">→</span>
            </button>
            
            <button className="bg-card/30 backdrop-blur-sm border border-border/50 hover:border-accent/30 hover:text-accent text-foreground/90 px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-card/50">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.8s'}}>
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
