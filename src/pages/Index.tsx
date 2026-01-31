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
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 reveal-on-scroll">
            <div className="max-w-xl">
              <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-4">The Collection</p>
              <h2 className="heading-section">Product Categories</h2>
              <p className="body-regular text-muted-foreground mt-4 leading-relaxed">
                Discover our curated range of premium lighting solutions, from architectural surface lights to smart home integration modules.
              </p>
            </div>
            <Link
              to="/shop"
              className="link-underline body-small uppercase tracking-widest pb-1 font-semibold"
            >
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 reveal-on-scroll">
            <div className="max-w-xl">
              <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-4">Highlights</p>
              <h2 className="heading-section">Featured Products</h2>
              <p className="body-regular text-muted-foreground mt-4 leading-relaxed">
                Our most sought-after lighting fixtures, meticulously engineered for performance and aesthetic excellence.
              </p>
            </div>
            <Link
              to="/shop"
              className="link-underline body-small uppercase tracking-widest pb-1 font-semibold"
            >
              Catalogue Collection
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Domotiq */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="text-center mb-20 reveal-on-scroll">
            <p className="body-small uppercase tracking-[0.4em] text-muted-foreground mb-4">Excellence</p>
            <h2 className="heading-section">Why Domotiq</h2>
            <p className="body-regular text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              We merge architectural lighting principles with cutting-edge engineering to create environments that inspire.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {[
              { icon: Lightbulb, title: 'Premium Quality', desc: 'Industry-leading LED technology' },
              { icon: Zap, title: 'Energy Efficient', desc: 'Up to 80% energy savings' },
              { icon: Wifi, title: 'Smart Ready', desc: 'IoT integration compatible' },
              { icon: Shield, title: '5 Year Warranty', desc: 'Complete peace of mind' },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-3xl bg-secondary/50 flex items-center justify-center transition-transform duration-500 hover:rotate-6">
                  <feature.icon size={28} strokeWidth={1.5} className="text-foreground/80" />
                </div>
                <h3 className="heading-product mb-3 font-semibold">{feature.title}</h3>
                <p className="body-small text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-32 md:py-48 bg-foreground text-background overflow-hidden">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="body-small uppercase tracking-[0.6em] opacity-50 reveal-on-scroll">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              "Light shapes space. <br />
              <span className="italic font-serif">Smart technology</span> <br />
              transforms how we live."
            </h2>
            <div className="w-px h-24 bg-background/20 mx-auto reveal-on-scroll" style={{ transitionDelay: '400ms' }} />
            <p className="body-large opacity-70 max-w-2xl mx-auto leading-relaxed reveal-on-scroll" style={{ transitionDelay: '600ms' }}>
              At Domotiq, we believe lighting is the silent architect. Every product we create is designed to enhance human experience while minimizing environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center space-y-10 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Ready to Transform Your Space?</h2>
            <p className="body-regular text-muted-foreground text-lg max-w-xl mx-auto">
              Discover our complete range of smart lighting solutions designed for modern architectural living.
            </p>
            <div className="pt-4">
              <Link
                to="/shop"
                className="group relative inline-flex items-center gap-4 px-12 py-5 bg-foreground text-background rounded-full font-semibold overflow-hidden transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">View Catalogue</span>
                <ArrowRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
