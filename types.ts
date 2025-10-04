
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  brand: string;
  imageUrl: string;
  features: string[];
  stockStatus: 'In Stock' | 'Out of Stock' | 'Low Stock';
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}
