import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { products, Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const searchTerm = query.toLowerCase().trim();
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm) ||
          p.category.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm) ||
          p.shortSpec.toLowerCase().includes(searchTerm)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleResultClick = () => {
    setQuery('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative max-w-2xl mx-auto mt-20 md:mt-32 px-4">
        <div className="bg-background rounded-2xl shadow-hover overflow-hidden animate-scale-in">
          {/* Search Input */}
          <div className="flex items-center gap-4 p-4 border-b border-border">
            <Search size={20} className="text-muted-foreground flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent body-regular placeholder:text-muted-foreground focus:outline-none"
              maxLength={100}
            />
            <button
              onClick={onClose}
              className="p-2 -mr-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim().length > 0 && results.length === 0 && (
              <div className="p-8 text-center">
                <p className="body-regular text-muted-foreground">
                  No products found for "{query}"
                </p>
              </div>
            )}
            
            {results.length > 0 && (
              <div className="p-2">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={handleResultClick}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="w-16 h-16 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="heading-product truncate">{product.name}</h4>
                      <p className="body-small text-muted-foreground truncate">
                        {product.shortSpec}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {query.trim().length === 0 && (
              <div className="p-8 text-center">
                <p className="body-small text-muted-foreground">
                  Start typing to search products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
