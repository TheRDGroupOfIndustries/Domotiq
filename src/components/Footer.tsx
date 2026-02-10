import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/10">
      <div className="container-wide py-20 ">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex flex-col items-center group w-fit relative">
              <img
                src={logo}
                alt="Domotiq"
                className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105 ab"
              />
              <span className="self-end w-[85%] text-[6px] font-bold tracking-wider text-foreground/80 mt-1 uppercase text-justify absolute mt-[45px]">
                Touch <span className='text-primary'>switches</span> & Smart living products
              </span>
            </Link>
            <p className="body-small text-muted-foreground max-w-xs leading-relaxed mt-[30px]">
              Smart home automation for modern living spaces. Elevating architectural excellence through intelligent technology.
            </p>
          </div>

          {/* Catalogue */}
          <div>
            <h4 className="heading-product mb-6 uppercase tracking-[0.2em] text-[10px] opacity-60">Catalogue</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=smart-switches" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">Smart Switches</Link></li>
              <li><Link to="/shop?category=smart-locks" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">Smart Locks</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="heading-product mb-6 uppercase tracking-[0.2em] text-[10px] opacity-60">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">Contact</Link></li>
              <li><Link to="/brochure" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">Brochure</Link></li>
              <li><Link to="/support" className="body-small text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-block">Support</Link></li>
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
            © {new Date().getFullYear()} Domotiq. All rights reserved.
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
