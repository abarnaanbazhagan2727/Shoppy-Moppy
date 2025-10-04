import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types';
import { getProductById } from '../services/mockApi';
import StarRating from '../components/StarRating';
import { ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProductById(parseInt(id, 10)).then(data => {
        setProduct(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // Optional: show a notification
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Gallery */}
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
          {/* Thumbnails could go here */}
        </div>

        {/* Product Details */}
        <div>
          <span className="text-sm text-gray-500">{product.brand}</span>
          <h1 className="text-4xl font-bold my-2">{product.name}</h1>
          <div className="flex items-center my-4">
            <StarRating rating={product.rating} />
            <span className="text-gray-600 ml-3">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
          
          <div className="mb-6">
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${product.stockStatus === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.stockStatus}
              </span>
          </div>

          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-primary">₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through ml-4">₹{product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 text-gray-600 hover:bg-gray-100 rounded-l-lg"><Minus size={16} /></button>
              <span className="px-4 text-lg font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="p-3 text-gray-600 hover:bg-gray-100 rounded-r-lg"><Plus size={16} /></button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
              <ShoppingCart className="mr-2" size={20} /> Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-lg text-gray-600 hover:text-red-500 hover:border-red-500 transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;