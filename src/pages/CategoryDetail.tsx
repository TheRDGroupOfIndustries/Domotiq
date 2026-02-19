import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
                <div className="container-wide py-20 text-center animate-fade-in">
                    <h1 className="heading-section mb-4">Category Not Found</h1>
                    <Link to="/shop" className="link-underline">
                        Return to Catalogue
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Breadcrumb */}
            <div className="container-wide py-6 animate-fade-in">
                <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 body-small text-muted-foreground hover:text-foreground transition-colors group  mt-8"
                >
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                    Back to Catalogue
                </Link>
            </div>

            {/* Header */}
            <section className=" pt-6 pb-12 md:pb-20 bg-secondary/10">
                <div className="container-wide">
                    <div className="max-w-2xl animate-fade-up">
                        <p className="body-small uppercase tracking-widest text-muted-foreground mb-2">Category</p>
                        <h1 className="heading-display mb-4">{category.name}</h1>
                        <p className="body-large text-muted-foreground">
                            {category.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-12 md:pb-16">
                <div className="container-wide">
                    <div className="mb-12 items-center flex justify-between animate-fade-in">
                        <p className="body-small text-muted-foreground tracking-widest uppercase">
                            {categoryProducts.length} {categoryProducts.length === 1 ? 'item' : 'items'} in {category.name}
                        </p>
                    </div>

                    {categoryProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
                            {categoryProducts.map((product, index) => (
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
                    ) : (
                        <div className="text-center py-20 px-6 animate-fade-in max-w-2xl mx-auto border border-border/50 rounded-[2rem] bg-secondary/10">
                            <div className="mb-8">
                                <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                                    Coming <span className="font-serif italic text-muted-foreground">Soon</span>
                                </h3>
                                <p className="body-regular text-muted-foreground max-w-lg mx-auto">
                                    {category.description}
                                </p>
                            </div>

                            <Link
                                to="/shop"
                                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors hover:underline underline-offset-4"
                            >
                                <ArrowRight size={16} className="rotate-180" />
                                Return to all products
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default CategoryDetail;
