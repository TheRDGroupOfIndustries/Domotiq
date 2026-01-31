import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block card-premium reveal-on-scroll"
    >
      <div className="relative aspect-square bg-secondary rounded-2xl overflow-hidden mb-6 transition-all duration-700 ease-smooth">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      <div className="space-y-2">
        <h3 className="heading-product transition-colors duration-300 group-hover:text-primary">
          {product.name}
        </h3>
        <p className="body-small text-muted-foreground line-clamp-2">
          {product.shortSpec}
        </p>
        <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
          <span className="body-small font-semibold uppercase tracking-widest text-[10px]">View Details</span>
          <ArrowRight size={14} className="transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
