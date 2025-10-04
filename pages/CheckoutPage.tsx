import React from 'react';
import { useCart } from '../context/CartContext';
import { Lock } from 'lucide-react';

const CheckoutPage: React.FC = () => {
    const { cartItems, cartTotal } = useCart();

    const InputField: React.FC<{ label: string; placeholder: string; type?: string; fullWidth?: boolean }> = ({ label, placeholder, type = 'text', fullWidth = false }) => (
        <div className={fullWidth ? 'col-span-2' : ''}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type={type} placeholder={placeholder} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
    );
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping & Payment Forms */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Shipping & Payment</h1>
                
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField label="First Name" placeholder="John" />
                        <InputField label="Last Name" placeholder="Doe" />
                        <InputField label="Address" placeholder="123 Main St" fullWidth />
                        <InputField label="City" placeholder="New York" />
                        <InputField label="State" placeholder="NY" />
                        <InputField label="ZIP Code" placeholder="10001" />
                        <InputField label="Email" placeholder="john.doe@example.com" type="email" fullWidth/>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField label="Card Number" placeholder="**** **** **** 1234" fullWidth />
                        <InputField label="Name on Card" placeholder="John M Doe" fullWidth />
                        <InputField label="Expiration Date" placeholder="MM/YY" />
                        <InputField label="CVV" placeholder="123" />
                    </div>
                </section>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-4 max-h-64 overflow-y-auto mb-4 border-b pb-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center">
                                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                                <div className="flex-grow">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between"><span>Subtotal</span><span>₹{cartTotal.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Shipping</span><span>₹0.00</span></div>
                        <div className="flex justify-between"><span>Taxes</span><span>₹0.00</span></div>
                        <div className="border-t my-2"></div>
                        <div className="flex justify-between text-lg font-bold"><span>Total</span><span>₹{cartTotal.toFixed(2)}</span></div>
                    </div>
                    <button className="w-full mt-6 bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                        <Lock size={16} className="mr-2" /> Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;