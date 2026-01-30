import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const Shop = () => {
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
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-display mb-4">Shop</h1>
            <p className="body-large text-muted-foreground">
              Premium LED lighting solutions for every space
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container-wide">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => handleCategoryChange('all')}
              className={cn(
                "px-4 py-2 rounded-full body-small whitespace-nowrap transition-all duration-200",
                activeCategory === 'all'
                  ? "bg-foreground text-background"
                  : "border border-border hover:border-foreground"
              )}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full body-small whitespace-nowrap transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-foreground text-background"
                    : "border border-border hover:border-foreground"
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
          <div className="mb-8">
            <p className="body-small text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="body-large text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
