import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-16 md:py-20">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Domotiq" className="h-8 w-auto" />
            </Link>
            <p className="body-small text-muted-foreground max-w-xs">
              Smart lighting and automation for modern living spaces.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="heading-product mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=surface" className="body-small text-muted-foreground hover:text-foreground transition-colors">Surface Lights</Link></li>
              <li><Link to="/shop?category=spots" className="body-small text-muted-foreground hover:text-foreground transition-colors">Spotlights</Link></li>
              <li><Link to="/shop?category=outdoor" className="body-small text-muted-foreground hover:text-foreground transition-colors">Outdoor</Link></li>
              <li><Link to="/shop?category=bulb" className="body-small text-muted-foreground hover:text-foreground transition-colors">Smart Bulbs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="heading-product mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="body-small text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="body-small text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/brochure" className="body-small text-muted-foreground hover:text-foreground transition-colors">Brochure</Link></li>
              <li><Link to="/support" className="body-small text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              <li><Link to="/support#warranty" className="body-small text-muted-foreground hover:text-foreground transition-colors">Warranty</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="heading-product mb-4">Stay Updated</h4>
            <p className="body-small text-muted-foreground mb-4">
              Subscribe for new products and updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-secondary border-0 rounded-lg body-small placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-foreground text-background rounded-lg body-small font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small text-muted-foreground">
            © 2026 Domotiq. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="body-small text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="body-small text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
