
import React, { useEffect, useRef, useState } from 'react';
import { Github, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart productivity app that learns from your habits and suggests optimal task scheduling using machine learning.',
      tech: ['React', 'TypeScript', 'Python', 'TensorFlow'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Real-time Collaboration Platform',
      description: 'Slack-inspired team communication tool with real-time messaging, file sharing, and video calls.',
      tech: ['Next.js', 'Socket.io', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting platform leveraging blockchain technology for tamper-proof elections.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing and understanding how neural networks learn and make decisions.',
      tech: ['Three.js', 'D3.js', 'Python', 'Flask'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-card border border-border rounded-3xl p-8 transition-all duration-700 hover:scale-105 card-glow ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className={`flex gap-3 transition-all duration-300 ${hoveredProject === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-60'}`}>
                    <Github className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
                    <ChevronRight className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm bg-secondary border border-border rounded-full transition-all duration-300 ${
                        hoveredProject === index ? 'bg-primary/20 border-primary text-primary' : ''
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
