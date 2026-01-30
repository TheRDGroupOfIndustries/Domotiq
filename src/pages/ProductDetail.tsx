import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Download } from 'lucide-react';
import Layout from '@/components/Layout';
import { getProductById, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <Link to="/shop" className="link-underline">
            Return to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container-wide py-6">
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 body-small text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Shop
        </Link>
      </div>

      {/* Product Detail */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="body-small uppercase tracking-widest text-muted-foreground">
                  {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  {product.name}
                </h1>
                <p className="body-large text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="heading-product mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="body-small text-muted-foreground">Power</p>
                    <p className="body-regular font-medium">{product.wattage}</p>
                  </div>
                  <div>
                    <p className="body-small text-muted-foreground">Luminous Flux</p>
                    <p className="body-regular font-medium">{product.lumens}</p>
                  </div>
                  <div>
                    <p className="body-small text-muted-foreground">Color Temperature</p>
                    <p className="body-regular font-medium">{product.colorTemp}</p>
                  </div>
                  <div>
                    <p className="body-small text-muted-foreground">Lifespan</p>
                    <p className="body-regular font-medium">{product.lifespan}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="heading-product mb-4">Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                        <Check size={12} className="text-background" />
                      </div>
                      <span className="body-regular">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
                  Request Quote
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-4 border border-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all">
                  <Download size={18} />
                  Datasheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="container-wide">
            <h2 className="heading-section mb-8">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
