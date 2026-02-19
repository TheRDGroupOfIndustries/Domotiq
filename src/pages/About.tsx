import { Link } from 'react-router-dom';
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
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
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
      <section className="py-24">
        <div className="container-wide">
          <div className="space-y-20 reveal-on-scroll">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">Partner With Domotiq: <br /><span className="font-serif italic text-3xl md:text-4xl">Redefining Smart Living</span></h2>
              <p className="body-regular text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Join the leader in smart home innovation. At Domotiq, we believe that the future of living is intelligent, secure, and energy-efficient. We are looking for passionate distributors, architects, interior designers, and system integrators to join our growing network and bring premium automation solutions to homes across the country.
              </p>
            </div>

            <div className="space-y-12">
              <h3 className="heading-section text-center">Why Partner with Domotiq?</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { title: "Technology", desc: "Gain access to our full suite of smart products, from high-load 40Amp energy savers to advanced RFID security systems." },
                  { title: "High Profitability", desc: "Enjoy industry-leading margins and a flexible pricing structure designed to help your business scale quickly." },
                  { title: "Seamless Compatibility", desc: "Our hardware is designed for easy integration with Windows-based management systems and standard electrical setups." },
                  { title: "Reliable Engineering", desc: "Offer your clients products built with fire-retardant materials and heavy-duty components capable of handling 220V-240V loads." },
                  { title: "Marketing & Leads", desc: "Benefit from Domotiq’s brand presence with marketing collateral, technical training, and verified project leads in your region." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-secondary/30 p-6 rounded-2xl space-y-4 hover:bg-secondary/50 transition-colors duration-300">
                    <h4 className="text-lg font-medium leading-tight">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="heading-section text-center">Partnership Categories</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "System Integrators & Installers", desc: "Tech-savvy professionals who can deploy our RFID locks and smart switches into residential and commercial projects." },
                  { title: "Architects & Interior Designers", desc: "Design-forward partners looking to integrate \"invisible\" smart technology into their aesthetic layouts." },
                  { title: "Real Estate Developers", desc: "Builders wanting to add significant market value to their properties with pre-installed smart automation." },
                  { title: "Regional Distributors", desc: "Businesses ready to stock and supply Domotiq's high-demand hardware to local retailers." }
                ].map((item, idx) => (
                  <div key={idx} className="border border-border/50 p-8 rounded-2xl flex flex-col justify-center space-y-4 hover:border-primary/50 transition-colors duration-300">
                    <h4 className="text-xl font-medium">{item.title}</h4>
                    <p className="body-small text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-8 reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Link
                to="/contact#contact-info"
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
