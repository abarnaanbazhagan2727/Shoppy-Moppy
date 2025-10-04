import React from 'react';
import { Product } from '../types';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative">
          <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
          {discount > 0 && (
            <span className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate group-hover:text-primary">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="flex items-center mb-2">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-500 ml-2">({product.reviewCount})</span>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-xl font-bold text-primary">₹{product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</p>
            )}
          </div>
          <button 
            onClick={() => addToCart(product, 1)}
            className="bg-primary text-white p-2 rounded-full hover:bg-blue-700 hover:scale-110 transition-transform duration-200"
            aria-label="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;