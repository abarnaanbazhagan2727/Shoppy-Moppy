import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { getProducts } from '../services/mockApi';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <aside className="w-full lg:w-1/4">
        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
          <h2 className="text-2xl font-bold mb-4 flex items-center"><Filter size={24} className="mr-2"/> Filters</h2>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Category</h3>
            <ul className="space-y-1">
              <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded" /> <span className="ml-2 text-gray-700">Electronics</span></label></li>
              <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded" /> <span className="ml-2 text-gray-700">Fashion</span></label></li>
              <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded" /> <span className="ml-2 text-gray-700">Home & Office</span></label></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <input type="range" min="0" max="150000" className="w-full" />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>₹0</span>
              <span>₹150000</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Rating</h3>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option>4 Stars & Up</option>
              <option>3 Stars & Up</option>
              <option>2 Stars & Up</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="w-full lg:w-3/4">
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Shop</h1>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Latest</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                        <div className="bg-gray-200 h-56 rounded-t-lg"></div>
                        <div className="pt-4">
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        )}
      </main>
    </div>
  );
};

export default ProductListingPage;