import React from 'react';
import { useParams } from 'react-router-dom';
import { translations, Language } from '../lib/i18n';
import ShopGrid from '../components/ShopGrid';

interface ShopProps {
  language: Language;
}

const Shop: React.FC<ShopProps> = ({ language }) => {
  const { category } = useParams();
  const t = translations[language];

  const categoryNames: { [key: string]: string } = {
    'suits': 'Suits',
    'tshirts-football': 'Football T-Shirts',
    'tshirts-streetwear': 'Streetwear T-Shirts',
    'shirts': 'Youth Shirts',
    'tshirts-women': 'Women T-Shirts'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-display mb-2">
        {category ? categoryNames[category] || 'Shop' : 'All Products'}
      </h1>
      <p className="text-shella-muted mb-8">Browse our latest collections</p>
      <ShopGrid language={language} category={category} />
    </div>
  );
};

export default Shop;
