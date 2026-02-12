import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Download } from 'lucide-react';
import Layout from '@/components/Layout';
import { getProductById, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import brochure from '@/assets/Brochure.pdf';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center animate-fade-in">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <Link to="/shop" className="link-underline">
            Return to Catalogue
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const hasSpecs = [
    product.wattage,
    product.protection,
    product.durability,
    product.connectivity,
    product.colorTemp,
    product.lumens,
    product.lifespan
  ].some(spec => spec);

  const handleWhatsAppEnquiry = () => {
    const message = `Hello Domotiq, I'm interested in the ${product.name} from your catalogue. Could you provide more details?`;
    const whatsappUrl = `https://wa.me/916386282989?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Product Detail */}
      <section className="pb-20 relative">
        {/* Breadcrumb */}
        <div className="sticky top-20 md:top-24 z-30 bg-background/80 backdrop-blur-md border-b border-border/50 lg:border-none">
          <div className="container-wide py-4 md:py-6 animate-fade-in">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 body-small text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Catalogue
            </Link>
          </div>
        </div>

        <div className="container-wide pt-8 md:pt-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-40 h-fit space-y-4 animate-fade-in">
              <div className="bg-secondary rounded-2xl overflow-hidden group flex items-center justify-center min-h-[500px] p-12 md:p-20 pt-16 md:pt-24">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-[600px] w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8 animate-fade-up">
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
              {!['kavach', 'sahaj', 'aavarun'].includes(product.category.toLowerCase()) && hasSpecs && (
                <div className="p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors duration-300">
                  <h3 className="heading-product mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {product.wattage && (
                      <div>
                        <p className="body-small text-muted-foreground">Power</p>
                        <p className="body-regular font-medium">{product.wattage}</p>
                      </div>
                    )}
                    {product.protection && (
                      <div>
                        <p className="body-small text-muted-foreground">Surge Protection</p>
                        <p className="body-regular font-medium">{product.protection}</p>
                      </div>
                    )}
                    {product.durability && (
                      <div>
                        <p className="body-small text-muted-foreground">Durability: Testing Switching Cycle</p>
                        <p className="body-regular font-medium">{product.durability}</p>
                      </div>
                    )}
                    {product.connectivity && (
                      <div>
                        <p className="body-small text-muted-foreground">Connectivity</p>
                        <p className="body-regular font-medium">{product.connectivity}</p>
                      </div>
                    )}
                    {product.colorTemp && (
                      <div>
                        <p className="body-small text-muted-foreground">Color Option</p>
                        <p className="body-regular font-medium">{product.colorTemp}</p>
                      </div>
                    )}
                    {product.lumens && (
                      <div>
                        <p className="body-small text-muted-foreground">Lumens</p>
                        <p className="body-regular font-medium">{product.lumens}</p>
                      </div>
                    )}
                    {product.lifespan && (
                      <div>
                        <p className="body-small text-muted-foreground">Lifespan</p>
                        <p className="body-regular font-medium">{product.lifespan}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Features */}
              <div>
                <h3 className="heading-product mb-4">Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={feature} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-primary-foreground" />
                      </div>
                      <span className="body-regular">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="flex-1 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                >
                  WhatsApp Enquiry
                </button>
                <a
                  href={brochure}
                  download="Brochure.pdf"
                  className="flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  Datasheet
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 border-t border-border animate-fade-up">
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
