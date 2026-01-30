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
      className="group block"
    >
      <div className="relative aspect-square bg-secondary rounded-xl overflow-hidden mb-4 transition-all duration-500 ease-smooth group-hover:shadow-hover">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="heading-product group-hover:opacity-70 transition-opacity duration-200">
          {category.name}
        </h3>
        <p className="body-small text-muted-foreground">
          {category.description}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
