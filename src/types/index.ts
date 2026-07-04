export interface User {
  id: string;
  email: string;
  phone: string;
  fullName: string;
  address: string;
  city: string;
  role: 'customer' | 'admin';
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  category: 'suits' | 'tshirts-football' | 'tshirts-streetwear' | 'shirts' | 'tshirts-women';
  price: number;
  description: string;
  image: string;
  sizes: string[];
  colors: string[];
  stock: number;
  createdAt: Date;
}

export interface CartItem {
  productId: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  shippingCost: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid';
  createdAt: Date;
  deliveryDate: Date;
}

export interface AuthResponse {
  token: string;
  user: User;
}
