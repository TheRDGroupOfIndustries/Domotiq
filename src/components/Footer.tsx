import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import logo from '@/assets/image.png';
import brochure from '@/assets/Brochure.pdf';
import { categories } from '@/data/products';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/10">
      <div className="container-wide py-14 ">
        {/* Main Footer */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex flex-col items-center group w-fit">
              <img
                src={logo}
                alt="Domotiq"
                className="h-14 md:h-[60px] w-auto transition-transform duration-500 group-hover:scale-105 ab"
              />
            </Link>
            <p className="body-small text-muted-foreground max-w-xs leading-relaxed mt-[20px]">
              Smart home automation for modern living spaces. Elevating architectural excellence through intelligent technology.
            </p>
            <div className="flex items-center gap-5 mt-6">
              {/* <a href="/" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
                <FaLinkedin size={24} />
              </a> */}
              <a href="https://www.facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110" target='_blank'>
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110" target='_blank'>
                <FaInstagram size={24} />
              </a>
              {/* <a href="/" aria-label="YouTube" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
                <FaYoutube size={24} />
              </a> */}
               <a href="https://wa.me/916386282989?text=Hi! I'm interested in Domotiq products." aria-label="WhatsApp" target='_blank' className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Catalogue */}
          <div>
            <h4 className="heading-product mb-6 uppercase tracking-[0.2em] text-[12px] opacity-60">Catalogue</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/shop?category=${category.id}`}
                    className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="heading-product mb-6 uppercase tracking-[0.2em] text-[12px] opacity-60">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">Contact</Link></li>
              <li><Link to="/support" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">Support</Link></li>
              <li><a href={brochure} download="Brochure.pdf" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">Brochure</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="heading-product mb-6 uppercase tracking-[0.2em] text-[10px] opacity-60">Stay Updated</h4>
            <p className="body-small text-muted-foreground mb-6">
              Subscribe for new products and smart home updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-5 py-4 bg-background border border-border rounded-xl body-small focus:ring-2 focus:ring-foreground/5 transition-all outline-none"
              />
              <button
                type="submit"
                className="w-full px-5 py-4 bg-foreground text-background rounded-full body-small font-semibold hover:opacity-90 transition-all border border-transparent hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="body-small text-muted-foreground">
            © 2026 Domotiq. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="body-small text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="body-small text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
