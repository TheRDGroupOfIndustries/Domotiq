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
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="body-small uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Contact Us
            </p>
            <h1 className="heading-display mb-6">
              Let's Start a
              <br />
              Conversation
            </h1>
            <p className="body-large text-muted-foreground">
              Have a project in mind or need technical support? We're here to help bring your lighting vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="heading-section mb-6">Get in Touch</h2>
                <p className="body-regular text-muted-foreground">
                  Whether you're an architect, contractor, or homeowner, our team is ready to assist with product selection, technical specifications, and project consultation.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="heading-product mb-1">Email</p>
                    <a href="mailto:hello@domotiq.com" className="body-regular text-muted-foreground hover:text-foreground transition-colors">
                      hello@domotiq.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="heading-product mb-1">Phone</p>
                    <a href="tel:+918005550199" className="body-regular text-muted-foreground hover:text-foreground transition-colors">
                      +91 (800) 555-0199
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="heading-product mb-1">Headquarters</p>
                    <p className="body-regular text-muted-foreground">
                      Varanasi, Uttar Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="body-small text-muted-foreground mb-4">Business Hours</p>
                <p className="body-regular">Monday – Friday: 9:00 AM – 6:00 PM PST</p>
                <p className="body-regular text-muted-foreground">Saturday – Sunday: Closed</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-secondary/30 rounded-2xl">
                <h3 className="heading-section mb-8">Send a Message</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="body-small text-muted-foreground mb-2 block">
                      Name <span className="text-foreground">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                      placeholder="Your name"
                      maxLength={100}
                    />
                    {errors.name && <p className="body-small text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="body-small text-muted-foreground mb-2 block">
                      Email <span className="text-foreground">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                    {errors.email && <p className="body-small text-destructive mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="body-small text-muted-foreground mb-2 block">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                      placeholder="+1 (555) 000-0000"
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <label className="body-small text-muted-foreground mb-2 block">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                      placeholder="Company name"
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="body-small text-muted-foreground mb-2 block">
                    Subject <span className="text-foreground">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg body-regular text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Project Consultation">Project Consultation</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Warranty Claim">Warranty Claim</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="body-small text-destructive mt-1">{errors.subject}</p>}
                </div>

                <div className="mt-6">
                  <label className="body-small text-muted-foreground mb-2 block">
                    Message <span className="text-foreground">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg body-regular placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    maxLength={2000}
                  />
                  {errors.message && <p className="body-small text-destructive mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-foreground text-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="heading-section">Looking for Technical Documentation?</h2>
              <p className="body-regular opacity-70 mt-2">
                Download product datasheets, installation guides, and specifications.
              </p>
            </div>
            <Link
              to="/support"
              className="inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 whitespace-nowrap"
            >
              Visit Support
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
