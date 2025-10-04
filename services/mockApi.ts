import { Product, Category } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Quantum-Core Laptop',
    description: 'High-performance laptop for professionals and gamers. Featuring the latest generation processor and a stunning 4K display.',
    price: 124999.00,
    originalPrice: 149999.00,
    rating: 4.8,
    reviewCount: 256,
    category: 'Electronics',
    brand: 'Innovatech',
    imageUrl: 'https://picsum.photos/seed/laptop/600/600',
    features: ['16-inch 4K OLED Display', '12-core CPU', '32GB DDR5 RAM', '1TB NVMe SSD'],
    stockStatus: 'In Stock',
  },
  {
    id: 2,
    name: 'AcousticBliss Wireless Headphones',
    description: 'Immerse yourself in pure sound with these noise-cancelling wireless headphones. 40-hour battery life and supreme comfort.',
    price: 19999.00,
    rating: 4.9,
    reviewCount: 1024,
    category: 'Electronics',
    brand: 'SoundWave',
    imageUrl: 'https://picsum.photos/seed/headphones/600/600',
    features: ['Active Noise Cancellation', '40-Hour Battery Life', 'Bluetooth 5.2', 'Crystal-clear Microphone'],
    stockStatus: 'In Stock',
  },
  {
    id: 3,
    name: 'Urban Explorer Backpack',
    description: 'A stylish and durable backpack for your daily commute or weekend adventures. Water-resistant material and multiple compartments.',
    price: 4999.00,
    originalPrice: 6999.00,
    rating: 4.6,
    reviewCount: 512,
    category: 'Fashion',
    brand: 'VentureGear',
    imageUrl: 'https://picsum.photos/seed/backpack/600/600',
    features: ['Water-resistant Fabric', '15-inch Laptop Sleeve', 'Anti-theft Pocket', 'USB Charging Port'],
    stockStatus: 'Low Stock',
  },
    {
    id: 4,
    name: 'ErgoComfort Office Chair',
    description: 'Stay productive and comfortable all day with this ergonomic office chair. Fully adjustable with lumbar support.',
    price: 24990.00,
    rating: 4.7,
    reviewCount: 480,
    category: 'Home & Office',
    brand: 'FlexiSpot',
    imageUrl: 'https://picsum.photos/seed/chair/600/600',
    features: ['Adjustable Lumbar Support', 'Breathable Mesh Back', '4D Armrests', 'Smooth-rolling Casters'],
    stockStatus: 'In Stock',
  },
  {
    id: 5,
    name: 'SmartBrew Coffee Maker',
    description: 'Start your day right with the perfect cup of coffee. Controllable via a mobile app to schedule your brews.',
    price: 8999.00,
    originalPrice: 10999.00,
    rating: 4.5,
    reviewCount: 320,
    category: 'Home & Office',
    brand: 'KitchenTech',
    imageUrl: 'https://picsum.photos/seed/coffee/600/600',
    features: ['Wi-Fi Enabled', 'Programmable Brewing Times', 'Adjustable Brew Strength', '12-Cup Capacity'],
    stockStatus: 'Out of Stock',
  },
  {
    id: 6,
    name: 'City-Cruiser Electric Scooter',
    description: 'Navigate the city effortlessly with this lightweight and foldable electric scooter. 25km range and a top speed of 25km/h.',
    price: 39999.00,
    rating: 4.4,
    reviewCount: 150,
    category: 'Sports & Outdoors',
    brand: 'RideVolt',
    imageUrl: 'https://picsum.photos/seed/scooter/600/600',
    features: ['25km Range', '25km/h Top Speed', 'Foldable Design', 'LED Headlight and Taillight'],
    stockStatus: 'In Stock',
  },
  {
    id: 7,
    name: 'Classic Chronograph Watch',
    description: 'A timeless timepiece that combines classic design with modern functionality. Stainless steel case and leather strap.',
    price: 14999.00,
    rating: 4.9,
    reviewCount: 600,
    category: 'Fashion',
    brand: 'EleganceTime',
    imageUrl: 'https://picsum.photos/seed/watch/600/600',
    features: ['Swiss Quartz Movement', 'Sapphire Crystal Glass', 'Water Resistant to 50m', 'Genuine Leather Strap'],
    stockStatus: 'In Stock',
  },
  {
    id: 8,
    name: 'Zen Garden Yoga Mat',
    description: 'Find your balance with this eco-friendly, non-slip yoga mat. Made from sustainable materials for a grounded practice.',
    price: 3495.00,
    rating: 4.8,
    reviewCount: 220,
    category: 'Sports & Outdoors',
    brand: 'YogaLife',
    imageUrl: 'https://picsum.photos/seed/yoga/600/600',
    features: ['Eco-friendly Natural Rubber', 'Superior Grip and Cushioning', 'Lightweight and Portable', 'Includes Carrying Strap'],
    stockStatus: 'In Stock',
  }
];

export const mockCategories: Category[] = [
  { id: 'electronics', name: 'Electronics', imageUrl: 'https://picsum.photos/seed/electronics/400/300' },
  { id: 'fashion', name: 'Fashion', imageUrl: 'https://picsum.photos/seed/fashion/400/300' },
  { id: 'home-office', name: 'Home & Office', imageUrl: 'https://picsum.photos/seed/home/400/300' },
  { id: 'sports-outdoors', name: 'Sports & Outdoors', imageUrl: 'https://picsum.photos/seed/sports/400/300' },
];


export const getProducts = (): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};

export const getProductById = (id: number): Promise<Product | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProducts.find(p => p.id === id));
    }, 300);
  });
};

export const getCategories = (): Promise<Category[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockCategories);
    }, 200);
  });
}