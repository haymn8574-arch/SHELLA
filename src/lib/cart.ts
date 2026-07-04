import { create } from 'zustand';
import { CartItem } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(
      i => i.productId === item.productId && i.size === item.size && i.color === item.color
    );
    
    const newItems = existingItem
      ? state.items.map(i =>
          i === existingItem
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      : [...state.items, item];
    
    localStorage.setItem('cart', JSON.stringify(newItems));
    return { items: newItems };
  }),
  
  removeItem: (productId, size, color) => set((state) => {
    const newItems = state.items.filter(
      i => !(i.productId === productId && i.size === size && i.color === color)
    );
    localStorage.setItem('cart', JSON.stringify(newItems));
    return { items: newItems };
  }),
  
  updateQuantity: (productId, size, color, quantity) => set((state) => {
    const newItems = state.items.map(i =>
      i.productId === productId && i.size === size && i.color === color
        ? { ...i, quantity }
        : i
    ).filter(i => i.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(newItems));
    return { items: newItems };
  }),
  
  clearCart: () => set(() => {
    localStorage.removeItem('cart');
    return { items: [] };
  }),
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  }
}));
