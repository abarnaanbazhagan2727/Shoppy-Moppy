import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center bg-white p-12 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart ({cartCount} items)</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-grow">
          <div className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center py-6">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-6"/>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                  <p className="text-primary font-bold mt-1">₹{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center mx-6">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-gray-600 border rounded-l-md hover:bg-gray-100"><Minus size={16} /></button>
                  <span className="px-4 py-2 border-t border-b">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-gray-600 border rounded-r-md hover:bg-gray-100"><Plus size={16} /></button>
                </div>
                <div className="text-lg font-semibold w-24 text-right">₹{(item.price * item.quantity).toFixed(2)}</div>
                <button onClick={() => removeFromCart(item.id)} className="ml-6 text-gray-500 hover:text-red-600">
                  <Trash2 size={20}/>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 lg:sticky top-24 h-fit">
          <div className="bg-light-gray p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-300 my-3"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="mt-6 w-full bg-primary text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors block">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;