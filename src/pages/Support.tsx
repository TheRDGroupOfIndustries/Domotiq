import { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
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
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-display mb-4">Support</h1>
            <p className="body-large text-muted-foreground">
              We're here to help. Find answers to common questions or get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container-wide">
          <h2 className="heading-section mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="heading-product pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      "flex-shrink-0 transition-transform duration-200",
                      openFaq === index && "rotate-180"
                    )}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="body-regular text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section id="warranty" className="py-12 md:py-16 border-t border-border">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="heading-section mb-4">Warranty Information</h2>
              <div className="space-y-4 body-regular text-muted-foreground">
                <p>
                  Domotiq stands behind the quality of every product we manufacture. Our comprehensive warranty program ensures peace of mind for your lighting investment.
                </p>
                <ul className="space-y-2">
                  <li>• 5-year standard warranty on all products</li>
                  <li>• Coverage for manufacturing defects</li>
                  <li>• Free replacement for qualifying claims</li>
                  <li>• Extended warranty options available</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="heading-section mb-4">Downloads</h2>
              <div className="space-y-3">
                {['Product Catalogue 2024', 'Installation Guides', 'Technical Specifications', 'Warranty Terms'].map((doc) => (
                  <button
                    key={doc}
                    className="w-full flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <span className="body-regular">{doc}</span>
                    <span className="body-small text-muted-foreground">PDF</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 md:py-16 border-t border-border">
        <div className="container-wide">
          <h2 className="heading-section mb-8">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="body-regular text-muted-foreground">
                Have a question about our products or need assistance with your project? Our team is ready to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="heading-product">Email</p>
                    <p className="body-regular text-muted-foreground">support@domotiq.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="heading-product">Phone</p>
                    <p className="body-regular text-muted-foreground">+91 (800) 555-0199</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="heading-product">Headquarters</p>
                    <p className="body-regular text-muted-foreground">
                      Varanasi, Uttar Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="body-small text-muted-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary border-0 rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="body-small text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-secondary border-0 rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="body-small text-muted-foreground mb-2 block">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-secondary border-0 rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="body-small text-muted-foreground mb-2 block">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border-0 rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
