import React from 'react';
import { Product, CartItem } from '../types';
import { useCart } from '../lib/cart';
import { Language } from '../lib/i18n';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  language: Language;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, language }) => {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);
  const [quantity, setQuantity] = React.useState(1);
  const cart = useCart();

  const handleAddToCart = () => {
    const item: CartItem = {
      productId: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: product.price
    };
    cart.addItem(item);
    setQuantity(1);
    alert('Added to cart!');
  };

  const colorMap: { [key: string]: string } = {
    'Black': '#000000',
    'White': '#ffffff',
    'Grey': '#808080',
    'Navy': '#001f3f',
    'Pink': '#ff69b4',
  };

  return (
    <div className="bg-shella-card border-2 border-shella-line p-4 hover:shadow-lg transition">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 rounded mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(product.name);
          }}
        />
      </div>

      {/* Product Info */}
      <h3 className="font-display text-sm mb-2 line-clamp-2">{product.name}</h3>
      <p className="text-shella-muted text-xs mb-3 line-clamp-2">{product.description}</p>

      {/* Price */}
      <p className="text-lg font-bold text-shella-neon mb-3">{product.price} EGP</p>

      {/* Size Selection */}
      <div className="mb-3">
        <label className="text-xs font-mono uppercase mb-2 block">Size</label>
        <div className="flex gap-2">
          {product.sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 border text-xs font-bold transition ${
                selectedSize === size
                  ? 'bg-shella-neon text-white border-shella-neon'
                  : 'border-shella-line hover:border-shella-neon'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-3">
        <label className="text-xs font-mono uppercase mb-2 block">Color</label>
        <div className="flex gap-2 flex-wrap">
          {product.colors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded border-2 transition ${
                selectedColor === color
                  ? 'border-shella-neon scale-110'
                  : 'border-gray-300'
              }`}
              style={{ backgroundColor: colorMap[color] || '#ccc' }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="p-1 border border-shella-line hover:bg-gray-100"
        >
          <Minus size={16} />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-12 text-center border border-shella-line py-1"
          min="1"
        />
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="p-1 border border-shella-line hover:bg-gray-100"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-shella-neon text-white font-bold py-2 px-4 hover:bg-blue-600 transition flex items-center justify-center gap-2"
      >
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
