import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Lightbulb, Wifi } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { categories, getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
            <p className="body-small uppercase tracking-[0.3em] text-muted-foreground">
              Smart Lighting & Automation
            </p>
            <h1 className="heading-display">
              Smart Lighting.
              <br />
              Intelligent Living.
            </h1>
            <p className="body-large text-muted-foreground max-w-xl mx-auto">
              Premium LED lighting solutions and smart automation for modern architectural spaces.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all duration-300"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
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
              Shop Collection
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
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
