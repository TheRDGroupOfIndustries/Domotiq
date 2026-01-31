import { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What warranty do Domotiq products come with?',
    answer: 'All Domotiq products come with a standard 5-year warranty covering manufacturing defects and component failures under normal use conditions. Extended warranty options are available for commercial projects.'
  },
  {
    question: 'Are Domotiq lights compatible with smart home systems?',
    answer: 'Yes, our smart-ready products are compatible with major smart home platforms including DALI, KNX, and 0-10V dimming systems. Our WiFi-enabled products also work with voice assistants like Alexa and Google Home.'
  },
  {
    question: 'How do I request a product datasheet?',
    answer: 'Datasheets are available for download on each product page. For comprehensive technical documentation or custom specifications, please contact our technical support team.'
  },
  {
    question: 'Do you offer project consultation services?',
    answer: 'Yes, our lighting specialists provide free consultation for architectural and commercial projects. We can assist with lighting design, product selection, and energy calculations.'
  },
  {
    question: 'What is the typical lifespan of Domotiq LED products?',
    answer: 'Our LED products are rated for 35,000 to 60,000 hours of operation, depending on the product line. This translates to over 15 years of use under typical commercial operating conditions.'
  },
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-48 overflow-hidden bg-black text-background relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-foreground/20 via-transparent to-transparent" />
        <div className="container-wide relative z-10">
          <div className="max-w-4xl reveal-on-scroll">
            <p className="body-small uppercase tracking-[0.6em] text-muted-foreground mb-8">
              Technical Center
            </p>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-10 leading-[1.1]">
              We're here to
              <br />
              <span className="italic font-serif text-accent">Assist.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              Find answers to common technical queries or get in touch with our team of precision-lighting specialists.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-40 border-t border-border bg-secondary/10 relative overflow-hidden">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="reveal-on-scroll mb-20">
              <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-6">Common Inquiries</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">Frequently Asked <span className="font-serif italic text-foreground/80">Questions</span></h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="reveal-on-scroll border border-border/50 rounded-3xl overflow-hidden bg-background shadow-soft transition-all duration-700 hover:border-foreground/20"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 md:p-10 text-left hover:bg-secondary/20 transition-all duration-500 group"
                  >
                    <span className="text-xl md:text-2xl font-light tracking-tight pr-12">{faq.question}</span>
                    <div className={cn(
                      "w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-700 ease-smooth group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary",
                      openFaq === index && "bg-primary text-primary-foreground rotate-180 border-primary"
                    )}>
                      <ChevronDown size={24} strokeWidth={1} />
                    </div>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-700 ease-smooth",
                      openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 md:px-10 pb-10">
                        <div className="w-12 h-px bg-foreground/10 mb-8" />
                        <p className="body-regular text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Downloads */}
      <section id="warranty" className="py-24 md:py-40">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-24 md:gap-40 items-start">
            <div className="reveal-on-scroll">
              <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-6">Assurance</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10">Warranty Information</h2>
              <div className="space-y-10 body-regular text-muted-foreground text-lg leading-relaxed">
                <p className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                  Domotiq stands behind the quality of every product we manufacture. Our comprehensive warranty program ensures absolute peace of mind for your architectural lighting investment.
                </p>
                <ul className="space-y-6">
                  {[
                    '5-year standard warranty on all products',
                    'Coverage for manufacturing defects',
                    'Free replacement for qualifying claims',
                    'Extended warranty options available'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-6 reveal-on-scroll" style={{ transitionDelay: `${400 + idx * 100}ms` }}>
                      <div className="w-2 h-2 rounded-full bg-foreground border border-background shadow-soft flex-shrink-0" />
                      <span className="text-xl font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-6">Resources</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10">Downloads</h2>
              <div className="grid gap-6">
                {['Product Catalogue 2024', 'Installation Guides', 'Technical Specifications', 'Warranty Terms'].map((doc, idx) => (
                  <button
                    key={doc}
                    className="group w-full flex items-center justify-between p-8 border border-border rounded-[2rem] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-700 ease-smooth reveal-on-scroll"
                    style={{ transitionDelay: `${500 + idx * 100}ms` }}
                  >
                    <span className="text-xl font-light tracking-tight">{doc}</span>
                    <div className="flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="body-small font-bold text-[10px] tracking-widest uppercase">PDF</span>
                      <ChevronDown size={20} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Contact */}
      <section id="contact" className="py-32 md:py-48 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container-wide relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24 reveal-on-scroll">
              <p className="body-small uppercase tracking-[0.6em] opacity-50 mb-8">Technical Support</p>
              <h2 className="text-4xl md:text-7xl font-light tracking-tighter mb-8">Still need <span className="font-serif italic text-accent">Help?</span></h2>
              <p className="text-xl md:text-2xl opacity-70 max-w-2xl mx-auto leading-relaxed">
                Our specialists are available to assist with complex integration queries and maintenance questions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              {[
                { icon: Mail, label: 'Email Support', value: 'support@domotiq.com' },
                { icon: Phone, label: 'Technical Helpline', value: '+91 (800) 555-0199' },
                { icon: MapPin, label: 'Technical Center', value: 'Varanasi, UP, India' }
              ].map((item, idx) => (
                <div key={item.label} className="space-y-6 group p-10 rounded-[3rem] border border-background/5 hover:border-primary/20 transition-all duration-700" style={{ transitionDelay: `${400 + idx * 150}ms` }}>
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-background/5 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon size={26} strokeWidth={1} />
                  </div>
                  <div>
                    <p className="body-small opacity-50 uppercase tracking-[0.3em] font-bold text-[10px] mb-2">{item.label}</p>
                    <p className="text-xl md:text-2xl font-light tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center reveal-on-scroll" style={{ transitionDelay: '800ms' }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-6 px-16 py-6 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary/90 transition-all duration-500 hover:scale-105"
              >
                Open Support Ticket
                <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
