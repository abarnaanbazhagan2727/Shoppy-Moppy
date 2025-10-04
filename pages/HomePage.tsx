
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Category, Product } from '../types';
import { getCategories, getProducts } from '../services/mockApi';
import ProductCard from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
    getProducts().then(products => setFeaturedProducts(products.slice(0, 4)));
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-primary text-white rounded-lg p-8 md:p-16 flex items-center" style={{ backgroundImage: `url('https://picsum.photos/seed/hero/1200/400')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-primary/70 p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New Season Arrivals</h1>
            <p className="text-lg md:text-xl mb-6">Check out all the new trends for this season.</p>
            <Link to="/products" className="bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300 inline-flex items-center">
              Shop Now <ChevronRight className="ml-2" />
            </Link>
        </div>
      </section>

      {/* Category Highlights */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link to="/products" key={category.id} className="relative rounded-lg overflow-hidden group h-48">
              <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white p-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <img src="https://picsum.photos/seed/avatar1/100/100" alt="Customer 1" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 italic">"Amazing products and fast shipping! I'm a customer for life."</p>
            <p className="font-semibold mt-4">- Alex Johnson</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <img src="https://picsum.photos/seed/avatar2/100/100" alt="Customer 2" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 italic">"The quality exceeded my expectations. Highly recommended!"</p>
            <p className="font-semibold mt-4">- Maria Garcia</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <img src="https://picsum.photos/seed/avatar3/100/100" alt="Customer 3" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 italic">"Customer service was fantastic and helped me with all my questions."</p>
            <p className="font-semibold mt-4">- David Smith</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
