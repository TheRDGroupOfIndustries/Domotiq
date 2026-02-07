import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import storyImage from '@/assets/about-story.png';

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
              The Future of
              <br />
              <span className="italic font-serif">Intelligent Living.</span>
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl text-xl md:text-2xl leading-relaxed reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              At Domotiq, we believe that technology should be invisible yet indispensable. We don’t just manufacture automation hardware; we craft experiences that blend luxury, comfort, and security into the very fabric of your space.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-40 bg-secondary/10 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="reveal-on-scroll">
              <p className="body-small uppercase tracking-[0.3em] text-muted-foreground mb-6">About Us</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10">Our <span className="font-serif italic">Identity</span></h2>
              <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                <p className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                  Born from a passion for innovation, Domotiq bridges the gap between sophisticated technology and human intuition. From residential sanctuaries to grand hospitality projects, our solutions are designed to respond to your touch, your voice, and your presence.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] md:aspect-square bg-secondary rounded-3xl overflow-hidden group reveal-on-scroll shadow-soft" style={{ transitionDelay: '300ms' }}>
              <img
                src={storyImage}
                alt="Architectural Excellence"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
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
                className="inline-flex items-center gap-6 px-12 py-5 border-2 border-primary text-primary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-105"
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
