import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { categories, products, getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const CategoryDetail = () => {
    const { id = '' } = useParams<{ id: string }>();
    const normalizedId = id.trim().toLowerCase();

    const category = categories.find((c) => c.id.trim().toLowerCase() === normalizedId);
    const categoryProducts = getProductsByCategory(id);

    if (!category) {
        return (
            <Layout>
                <div className="container-wide py-20 text-center">
                    <h1 className="heading-section mb-4">Category Not Found</h1>
                    <Link to="/shop" className="link-underline">
                        Return to Shop
                    </Link>
                </div>
            </Layout>
        );
    }

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

            {/* Header */}
            <section className="py-12 md:py-16 bg-secondary/10">
                <div className="container-wide">
                    <div className="max-w-2xl">
                        <h1 className="heading-display mb-4">{category.name}</h1>
                        <p className="body-large text-muted-foreground">
                            {category.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12 md:py-16">
                <div className="container-wide">
                    <div className="mb-8 items-center flex justify-between">
                        <p className="body-small text-muted-foreground">
                            Showing {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} in {category.name}
                        </p>
                    </div>

                    {categoryProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                            {categoryProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="animate-fade-up"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="body-large text-muted-foreground">
                                No products found in this category.
                            </p>
                            <Link to="/shop" className="mt-4 inline-block link-underline">
                                View all products
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default CategoryDetail;
