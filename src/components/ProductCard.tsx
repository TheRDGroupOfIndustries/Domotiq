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
      className="group block"
    >
      <div className="relative aspect-square bg-secondary rounded-xl overflow-hidden mb-4 transition-all duration-500 ease-smooth group-hover:shadow-hover">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="heading-product group-hover:opacity-70 transition-opacity duration-200">
          {product.name}
        </h3>
        <p className="body-small text-muted-foreground">
          {product.shortSpec}
        </p>
        <div className="flex items-center gap-2 pt-1">
          <span className="body-small font-medium">View Details</span>
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
