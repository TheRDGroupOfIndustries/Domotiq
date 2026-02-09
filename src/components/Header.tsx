import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { categories } from '@/data/products';
import logo from '@/assets/logo.png';
import SearchModal from './SearchModal';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Catalogue' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/support', label: 'Support' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileCatalogueOpen, setIsMobileCatalogueOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-all duration-500">
        <div className="container-wide">
          <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-500">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center group">
              <img
                src={logo}
                alt="Domotiq"
                className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
              />
              <span className="text-[9px] md:text-[10px] font-bold tracking-wide text-foreground/80 mt-1 text-center leading-none">
                Touch <span className='text-primary'>switches</span> & Smart living products
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                if (link.label === 'Catalogue') {
                  return (
                    <div key={link.href} className="relative group">
                      <Link
                        to={link.href}
                        className={cn(
                          "body-small uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-100 hover:translate-y-[-1px] inline-flex items-center gap-1",
                          (location.pathname === link.href) || (link.href === '/shop' && (location.pathname.startsWith('/category/') || location.pathname.startsWith('/product/')))
                            ? "font-medium opacity-100"
                            : "font-light opacity-60"
                        )}
                      >
                        {link.label}
                        <ChevronDown size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Menu */}
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-smooth z-50 min-w-[400px]">
                        <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-lg overflow-hidden p-2">
                          <div className="grid grid-cols-2 gap-2">
                            {categories.map((category) => (
                              <Link
                                key={category.id}
                                to={`/shop?category=${category.id}`}
                                className="px-4 py-3 text-sm font-light hover:bg-secondary/50 rounded-lg transition-colors hover:text-primary flex items-center justify-between group/item"
                              >
                                <span>{category.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "body-small uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-100 hover:translate-y-[-1px]",
                      (location.pathname === link.href)
                        ? "font-medium opacity-100"
                        : "font-light opacity-60"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 body-small hover:opacity-100 transition-all duration-300 group p-2"
                aria-label="Search products"
              >
                <Search size={22} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 group"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className={cn(
                    "absolute inset-0 transition-transform duration-500",
                    isMenuOpen ? "translate-y-0" : "translate-y-full"
                  )}>
                    <X size={24} strokeWidth={1.5} />
                  </div>
                  <div className={cn(
                    "absolute inset-0 transition-transform duration-500",
                    isMenuOpen ? "-translate-y-full" : "translate-y-0"
                  )}>
                    <Menu size={24} strokeWidth={1.5} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-700 ease-smooth",
            isMenuOpen ? "opacity-100 translate-y-0 visibility-visible" : "opacity-0 -translate-y-4 visibility-hidden pointer-events-none"
          )}
        >
          <nav className="container-wide py-4 flex flex-col items-center gap-8 h-[92vh] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.label === 'Catalogue') {
                return (
                  <div key={link.href} className="flex flex-col items-center gap-4 w-full">
                    <button
                      onClick={() => setIsMobileCatalogueOpen(!isMobileCatalogueOpen)}
                      className={cn(
                        "text-3xl tracking-tighter transition-all duration-500 hover:opacity-50 flex items-center gap-2",
                        location.pathname === link.href || isMobileCatalogueOpen ? "font-semibold" : "font-light"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={24}
                        className={cn("transition-transform duration-300", isMobileCatalogueOpen ? "rotate-180" : "")}
                      />
                    </button>

                    <div className={cn(
                      "flex flex-col items-center gap-4 overflow-hidden transition-all duration-500 ease-smooth w-full",
                      isMobileCatalogueOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    )}>
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/shop?category=${category.id}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg font-light text-muted-foreground hover:text-foreground transition-colors py-1"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-3xl tracking-tighter transition-all duration-500 hover:opacity-50",
                    location.pathname === link.href ? "font-semibold translate-x-2" : "font-light"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
