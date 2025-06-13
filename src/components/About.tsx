
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '2020', title: 'Started Coding Journey', description: 'First "Hello World" in Python - mind blown! 🐍' },
    { year: '2021', title: 'Web Development', description: 'Discovered React and fell in love with component-based architecture' },
    { year: '2022', title: 'CS Engineering', description: 'Enrolled in Computer Science program, diving deep into algorithms' },
    { year: '2023', title: 'Full-Stack Projects', description: 'Built my first complete web applications with modern tech stacks' },
    { year: '2024', title: 'AI & Innovation', description: 'Exploring AI/ML while crafting beautiful user experiences' },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">My Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From curious beginner to passionate engineer, here's how I've been turning curiosity into code
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {index % 2 === 0 ? (
                <>
                  {/* Left Side */}
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-card border border-border rounded-2xl p-6 card-glow hover:scale-105 transition-all duration-300">
                      <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Node */}
                  <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-background glow"></div>
                  
                  {/* Right Side - Year */}
                  <div className="w-1/2 pl-8">
                    <div className="text-4xl font-bold text-gradient">{item.year}</div>
                  </div>
                </>
              ) : (
                <>
                  {/* Left Side - Year */}
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-4xl font-bold text-gradient">{item.year}</div>
                  </div>
                  
                  {/* Center Node */}
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background glow"></div>
                  
                  {/* Right Side */}
                  <div className="w-1/2 pl-8">
                    <div className="bg-card border border-border rounded-2xl p-6 card-glow hover:scale-105 transition-all duration-300">
                      <h3 className="text-2xl font-bold text-accent mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
