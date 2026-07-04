import React from 'react';
import { products } from '../lib/products';
import { useCart } from '../lib/cart';
import { Language } from '../lib/i18n';
import ProductCard from './ProductCard';

interface ShopGridProps {
  language: Language;
  category?: string;
}

const ShopGrid: React.FC<ShopGridProps> = ({ language, category }) => {
  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} language={language} />
      ))}
    </div>
  );
};

export default ShopGrid;
