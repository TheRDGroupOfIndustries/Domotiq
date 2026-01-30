import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="body-small uppercase tracking-[0.3em] text-muted-foreground mb-4">
              About Domotiq
            </p>
            <h1 className="heading-display mb-6">
              Smart Control.
              <br />
              Seamless Living.
            </h1>
            <p className="body-large text-muted-foreground">
              Domotiq is redefining modern living in India by integrating intelligent technology into everyday spaces. Its clean, lowercase logo with a teal-highlighted "o" reflects clarity, innovation, and connectivity, embodying the fusion of simplicity and smart technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="heading-section mb-6">Smart Homes, Seamless Living</h2>
              <div className="space-y-4 text-muted-foreground body-regular">
                <p>
                  Domotiq transforms ordinary homes into smart environments where convenience and control are always at your fingertips. It promises you of connectivity, of control, of a home that listens.
                </p>
                <p>
                  It's not just automation; it's about making life effortless, secure, and tailored to you.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-secondary rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section mb-6">Domotiq for India</h2>
            <p className="body-large text-muted-foreground">
              From metropolitan apartments to homes in quieter neighborhoods, Domotiq brings accessible smart living solutions to households across the country. Designed with India's diverse lifestyles in mind, it offers technology that is intuitive, reliable, and future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Vision */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Smart Automation Vision
            </h2>
            <p className="body-large opacity-70">
              The future of lighting is intelligent. Our smart-ready products integrate seamlessly with modern building automation systems, enabling precise control, energy optimization, and adaptive lighting scenarios that respond to human presence and natural light.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 mt-4"
            >
              Explore Smart Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="heading-section">Partner With Us</h2>
            <p className="body-regular text-muted-foreground">
              Whether you're an architect, contractor, or specifier, we'd love to discuss how Domotiq lighting can elevate your next project.
            </p>
            <Link
              to="/support#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
