import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-48 overflow-hidden bg-black text-background relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foreground/20 via-transparent to-transparent" />
        <div className="container-wide relative z-10">
          <div className="max-w-4xl reveal-on-scroll">
            <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-8">
              About Domotiq
            </p>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-10 leading-[1.1]">
              Smart Control.
              <br />
              <span className="italic font-serif">Seamless living.</span>
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl text-xl md:text-2xl leading-relaxed reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              Domotiq is redefining modern living in India by integrating intelligent technology into everyday spaces. Our philosophy of clean, luxury-focused design reflects clarity, innovation, and connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-40 bg-secondary/10 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="reveal-on-scroll">
              <p className="body-small uppercase tracking-[0.3em] text-muted-foreground mb-6">Our Narrative</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10">Smart Homes, <span className="font-serif italic">Seamless Living</span></h2>
              <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                <p className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                  Domotiq transforms ordinary spaces into intelligent environments where convenience and control are integrated into the architecture. It's a promise of connectivity, of reliability, and of a home that truly listens.
                </p>
                <p className="reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
                  It's not just automation; it's about making life effortless, secure, and tailored to the unique rhythm of your lifestyle.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] md:aspect-square bg-secondary rounded-3xl overflow-hidden group reveal-on-scroll shadow-soft" style={{ transitionDelay: '300ms' }}>
              <div className="w-full h-full bg-gradient-to-br from-secondary via-[#f5f5f7] to-border transition-transform duration-1000 group-hover:scale-110 flex items-center justify-center p-12">
                <div className="w-px h-16 bg-foreground/10 absolute top-0 left-1/2 -translate-x-1/2" />
                <p className="body-small uppercase tracking-[0.4em] text-muted-foreground/50 rotate-90 whitespace-nowrap">Architectural Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India Section */}
      <section className="py-24 md:py-40">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-8">The Local Context</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12">Domotiq for <span className="font-serif italic">India</span></h2>
            <div className="w-20 h-px bg-foreground/10 mx-auto mb-12" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              From metropolitan luxury apartments to sprawling family estates, Domotiq brings accessible smart living solutions to households across the country. Designed with India's diverse lifestyles in mind, our technology is intuitive, reliable, and fundamentally future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 md:py-48 bg-foreground text-background overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 blur-3xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent" />
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="body-small uppercase tracking-[0.4em] opacity-50 reveal-on-scroll">The Vision</p>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              The future of living is <span className="italic font-serif">intelligent.</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-70 leading-relaxed reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              Our smart-ready solutions integrate seamlessly with modern building automation, enabling adaptive environments that respond to human presence, saving energy while enhancing comfort.
            </p>
            <div className="pt-8 reveal-on-scroll" style={{ transitionDelay: '600ms' }}>
              <Link
                to="/shop"
                className="group inline-flex items-center gap-4 px-12 py-5 bg-background text-foreground rounded-full font-semibold transition-all duration-500 hover:scale-105"
              >
                <span>Explore Catalogue</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-24 md:py-40">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center space-y-12 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Partner With Us</h2>
            <p className="body-regular text-muted-foreground text-xl leading-relaxed">
              Whether you're an architect, developer, or contractor, we'd love to discuss how Domotiq technology can elevate your next project.
            </p>
            <div className="reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Link
                to="/support#contact"
                className="inline-flex items-center gap-6 px-12 py-5 border-2 border-foreground rounded-full font-bold uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-all duration-500 hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
