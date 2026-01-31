import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Lightbulb, Wifi } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { categories, getFeaturedProducts } from '@/data/products';
import heroBg from '@/assets/hero-bg.png';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Premium Lighting"
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="container-wide text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fade-in space-y-2">
              <p className="body-small uppercase tracking-[0.4em] text-white/80">
                Domotiq Architectural
              </p>
              <div className="h-px w-12 bg-white/40 mx-auto" />
            </div>

            <h1 className="heading-display text-white drop-shadow-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Illuminating Spaces.
              <br />
              <span className="font-light italic">Inspiring Life.</span>
            </h1>

            <p className="body-large text-white/70 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Premium LED lighting solutions and smart automation for modern architectural spaces.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/shop"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all duration-500 hover:pr-12"
              >
                <span className="relative z-10 iterate-catalogue">Explore Catalogue</span>
                <ArrowRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-white group-hover:bg-white/90 transition-colors" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white rounded-full font-medium backdrop-blur-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <h2 className="heading-section">Product Categories</h2>
              <p className="body-regular text-muted-foreground mt-2">
                Explore our complete lighting range
              </p>
            </div>
            <Link
              to="/shop"
              className="link-underline body-small uppercase tracking-widest"
            >
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <h2 className="heading-section">Featured Products</h2>
              <p className="body-regular text-muted-foreground mt-2">
                Our most popular lighting solutions
              </p>
            </div>
            <Link
              to="/shop"
              className="link-underline body-small uppercase tracking-widest"
            >
              Catalogue Collection
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Domotiq */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-section">Why Domotiq</h2>
            <p className="body-regular text-muted-foreground mt-2 max-w-xl mx-auto">
              Engineering excellence meets intelligent design
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Lightbulb, title: 'Premium Quality', desc: 'Industry-leading LED technology' },
              { icon: Zap, title: 'Energy Efficient', desc: 'Up to 80% energy savings' },
              { icon: Wifi, title: 'Smart Ready', desc: 'IoT integration compatible' },
              { icon: Shield, title: '5 Year Warranty', desc: 'Complete peace of mind' },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="heading-product mb-2">{feature.title}</h3>
                <p className="body-small text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="body-small uppercase tracking-[0.3em] opacity-60">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              "Light shapes space. Smart technology
              <br className="hidden md:block" />
              transforms how we live within it."
            </h2>
            <p className="body-large opacity-70">
              At Domotiq, we believe lighting is architecture. Every product we create is designed to enhance spaces while minimizing environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="heading-section">Ready to Transform Your Space?</h2>
            <p className="body-regular text-muted-foreground">
              Discover our complete range of smart lighting solutions designed for modern living.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all duration-300"
            >
              View Catalogue
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
