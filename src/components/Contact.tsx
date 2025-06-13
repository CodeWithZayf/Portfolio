
import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Create Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an exciting project in mind? Let's bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? '-top-2 text-sm text-primary bg-background px-2'
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300"
                  placeholder="Your Email"
                  required
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? '-top-2 text-sm text-primary bg-background px-2'
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Your Message"
                  required
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? '-top-2 text-sm text-primary bg-background px-2'
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-card border border-border rounded-3xl p-8 card-glow h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-gradient">Get In Touch</h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and innovation.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-primary font-semibold">Email:</span>
                  <p className="text-muted-foreground">zayf@example.com</p>
                </div>
                <div>
                  <span className="text-accent font-semibold">Location:</span>
                  <p className="text-muted-foreground">Available for remote work</p>
                </div>
                <div>
                  <span className="text-primary font-semibold">Response Time:</span>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-primary border border-border hover:border-primary rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent border border-border hover:border-accent rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
