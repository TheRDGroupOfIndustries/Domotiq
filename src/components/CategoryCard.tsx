import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group block card-premium reveal-on-scroll"
    >
      <div className="relative aspect-square bg-secondary rounded-t-2xl overflow-hidden mb-6 transition-all duration-700 ease-smooth flex items-center justify-center p-8">
        <img
          src={category.image}
          alt={category.name}
          className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-1000 ease-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-soft">
          <ArrowUpRight size={22} className="text-foreground" />
        </div>
      </div>

      <div className="space-y-2 p-2">
        <h3 className="heading-product transition-colors duration-300 group-hover:text-primary">
          {category.name}
        </h3>
        <p className="body-small text-muted-foreground line-clamp-2">
          {category.description}
        </p>
      </div>
    </Link>
    // Check
  );
};

export default CategoryCard;
