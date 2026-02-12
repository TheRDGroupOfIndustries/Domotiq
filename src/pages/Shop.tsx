import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const Catalogue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = (searchParams.get('category') || 'all').toLowerCase();

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-secondary/20">
        <div className="container-wide">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="heading-display mb-4">
              {activeCategory === 'all'
                ? 'Our Catalogue'
                : categories.find(c => c.id === activeCategory)?.name || 'Our Catalogue'}
            </h1>
            <p className="body-large text-muted-foreground">
              {activeCategory === 'all'
                ? 'Premium smart home solutions curated for architectural excellence and modern living.'
                : categories.find(c => c.id === activeCategory)?.description || 'Premium smart home solutions curated for architectural excellence and modern living.'}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-40 transition-all duration-300">
        <div className="container-wide">
          <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide no-scrollbar">
            <button
              onClick={() => handleCategoryChange('all')}
              className={cn(
                "px-6 py-2 rounded-full body-small whitespace-nowrap transition-all duration-300 transform hover:scale-105",
                activeCategory === 'all'
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "border border-border hover:border-primary bg-background"
              )}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full body-small whitespace-nowrap transition-all duration-300 transform hover:scale-105",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border border-border hover:border-primary bg-background"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 min-h-[50vh]">
        <div className="container-wide">
          <div className="mb-12 flex justify-between items-center animate-fade-in">
            {filteredProducts.length > 0 && (
              <p className="body-small text-muted-foreground tracking-widest uppercase">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} in collection
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="group transition-all duration-500 hover:-translate-y-2">
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 px-6 animate-fade-in max-w-2xl mx-auto border border-border/50 rounded-[2rem] bg-secondary/10">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                  Coming <span className="font-serif italic text-muted-foreground">Soon</span>
                </h3>
                {['alok', 'advait'].includes(activeCategory) && (
                  <p className="body-regular text-muted-foreground max-w-lg mx-auto">
                    {categories.find(c => c.id === activeCategory)?.description}
                  </p>
                )}
              </div>

              <button
                onClick={() => handleCategoryChange('all')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors hover:underline underline-offset-4"
              >
                <ArrowRight size={16} className="rotate-180" />
                Return to all products
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Catalogue;
