import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().max(20, 'Phone must be less than 20 characters').optional(),
  company: z.string().trim().max(100, 'Company must be less than 100 characters').optional(),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24-48 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-48 overflow-hidden bg-black text-background relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-foreground/20 via-transparent to-transparent" />
        <div className="container-wide relative z-10">
          <div className="max-w-4xl reveal-on-scroll">
            <p className="body-small uppercase tracking-[0.6em] text-muted-foreground mb-8">
              Contact Us
            </p>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-10 leading-[1.1]">
              Let's Start a
              <br />
              <span className="italic font-serif">Conversation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              Have a project in mind or need technical support? We're here to help bring your automation vision to life with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-40">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-20 lg:gap-32">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-16">
              <div className="reveal-on-scroll">
                <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-6">Reach Out</p>
                <h2 className="text-4xl font-light tracking-tight mb-8">Get in Touch</h2>
                <p className="body-regular text-muted-foreground text-lg leading-relaxed">
                  Whether you're an architect, contractor, or homeowner, our team is ready to assist with product selection, technical specifications, and project consultation.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'info.domotiq@gmail.com', href: 'mailto:info.domotiq@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 6386282989', href: 'tel:+916386282989' },
                  { icon: MapPin, label: 'Headquarters', value: 'Dadar East Mumbai, India', href: null },
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-8 group reveal-on-scroll p-6 -m-6 rounded-3xl hover:bg-secondary/30 transition-all duration-500"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-700 ease-smooth">
                      <item.icon size={26} strokeWidth={1} />
                    </div>
                    <div>
                      <p className="body-small mb-2 opacity-50 uppercase tracking-[0.3em] font-bold text-[10px]">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-2xl font-light tracking-tight hover:opacity-100 opacity-80 transition-opacity border-b border-transparent hover:border-foreground/20">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-2xl font-light tracking-tight opacity-80 leading-snug">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-border reveal-on-scroll" style={{ transitionDelay: '500ms' }}>
                <p className="body-small text-muted-foreground mb-6 uppercase tracking-[0.4em] text-[10px]">Business Hours</p>
                <div className="space-y-3">
                  <p className="text-lg font-medium">Monday – Saturday: 10:00 AM – 6:00 PM</p>
                  <p className="text-lg text-muted-foreground font-serif italic">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <form onSubmit={handleSubmit} className="p-10 md:p-16 bg-white border border-border rounded-[2.5rem] shadow-soft relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/50 rounded-bl-full -mr-16 -mt-16" />
                <h3 className="text-3xl font-light tracking-tight mb-12">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="body-small text-muted-foreground uppercase tracking-widest text-[10px] block font-bold">
                      Name <span className="text-foreground">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-secondary/20 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl body-regular focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="Your name"
                      maxLength={100}
                    />
                    {errors.name && <p className="body-small text-destructive mt-1 font-medium">{errors.name}</p>}
                  </div>

                  <div className="space-y-4">
                    <label className="body-small text-muted-foreground uppercase tracking-widest text-[10px] block font-bold">
                      Email <span className="text-foreground">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-secondary/20 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl body-regular focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                    {errors.email && <p className="body-small text-destructive mt-1 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  <label className="body-small text-muted-foreground uppercase tracking-widest text-[10px] block font-bold">
                    Subject <span className="text-foreground">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-secondary/20 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl body-regular focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Project Consultation">Project Consultation</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                      <ArrowRight size={18} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  <label className="body-small text-muted-foreground uppercase tracking-widest text-[10px] block font-bold">
                    Message <span className="text-foreground">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-5 bg-secondary/20 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl body-regular focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                    placeholder="Tell us about your project..."
                    maxLength={2000}
                  />
                  {errors.message && <p className="body-small text-destructive mt-1 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-12 group relative w-full inline-flex items-center justify-center gap-4 px-12 py-5 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-[0.2em] text-xs overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container-wide relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
            <div className="reveal-on-scroll">
              <p className="body-small uppercase tracking-[0.4em] opacity-50 mb-6">Support Hub</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight max-w-2xl">Looking for <span className="font-serif italic text-accent">Technical</span> Documentation?</h2>
              <p className="text-xl md:text-2xl opacity-70 mt-8 max-w-2xl">
                Download product datasheets, installation guides, and full specifications.
              </p>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <Link
                to="/support"
                className="group relative inline-flex items-center gap-6 px-12 py-6 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all duration-500"
              >
                Visit Support
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
