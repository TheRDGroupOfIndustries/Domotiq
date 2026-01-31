import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const Catalogue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

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
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container-wide">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="heading-display mb-4">Our Catalogue</h1>
            <p className="body-large text-muted-foreground">
              Premium LED lighting solutions curated for architectural excellence and modern living.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-40 transition-all duration-300">
        <div className="container-wide">
          <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide no-scrollbar">
            <button
              onClick={() => handleCategoryChange('all')}
              className={cn(
                "px-6 py-2 rounded-full body-small whitespace-nowrap transition-all duration-300 transform hover:scale-105",
                activeCategory === 'all'
                  ? "bg-foreground text-background shadow-lg"
                  : "border border-border hover:border-foreground bg-background"
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
                    ? "bg-foreground text-background shadow-lg"
                    : "border border-border hover:border-foreground bg-background"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <div className="mb-12 flex justify-between items-center animate-fade-in">
            <p className="body-small text-muted-foreground tracking-widest uppercase">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} in collection
            </p>
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
            <div className="text-center py-32 animate-fade-in">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-muted-foreground" />
              </div>
              <p className="body-large text-muted-foreground">
                No products found in this category.
              </p>
              <button
                onClick={() => handleCategoryChange('all')}
                className="mt-6 link-underline body-small uppercase tracking-widest"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Catalogue;
