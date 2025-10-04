import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartCount } = useCart();

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-gray-600 hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary font-semibold' : ''}`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary hover:text-blue-700 transition-colors">
              Shoppy moppy
            </Link>
          </div>

          <nav className="hidden md:flex md:space-x-8">
            <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
            <NavLink to="/products" className={navLinkClasses}>Shop</NavLink>
            <a href="#" className="text-gray-600 hover:text-primary">About</a>
            <a href="#" className="text-gray-600 hover:text-primary">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-40 lg:w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                <Search size={20} />
              </button>
            </div>
            
            <Link to="/cart" className="relative text-gray-600 hover:text-primary transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="md:hidden text-gray-600 hover:text-primary">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;