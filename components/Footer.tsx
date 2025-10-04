import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Shoppy moppy</h3>
            <p className="text-gray-400">Your one-stop shop for everything you need. Quality products, unbeatable prices.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p className="text-gray-400">123 E-Commerce St, Web City</p>
            <p className="text-gray-400">Email: support@shoppymoppy.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary"><Facebook size={24}/></a>
              <a href="#" className="text-gray-400 hover:text-secondary"><Twitter size={24}/></a>
              <a href="#" className="text-gray-400 hover:text-secondary"><Instagram size={24}/></a>
              <a href="#" className="text-gray-400 hover:text-secondary"><Linkedin size={24}/></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shoppy moppy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;