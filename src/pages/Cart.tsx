import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../lib/cart';
import { products } from '../lib/products';
import { Language, translations } from '../lib/i18n';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartProps {
  language: Language;
}

const Cart: React.FC<CartProps> = ({ language }) => {
  const cart = useCart();
  const navigate = useNavigate();
  const t = translations[language];

  const getProductName = (productId: string) => {
    const product = products.find(p => p.id === productId);
    return product?.name || 'Unknown Product';
  };

  const shippingCost = 75;
  const subtotal = cart.getTotalPrice();
  const total = subtotal + shippingCost;

  if (cart.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-display mb-4">{t.cart.title}</h1>
        <p className="text-shella-muted mb-8">{t.cart.empty}</p>
        <button
          onClick={() => navigate('/shop')}
          className="px-6 py-3 bg-shella-neon text-white font-bold hover:bg-blue-600"
        >
          {t.cart.continueShopping}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-display mb-8">{t.cart.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.items.map((item, idx) => (
              <div key={idx} className="bg-shella-card border-2 border-shella-line p-4 flex gap-4">
                <div className="flex-grow">
                  <h3 className="font-display text-sm mb-2">
                    {getProductName(item.productId)}
                  </h3>
                  <p className="text-xs text-shella-muted mb-2">
                    {item.color} • Size {item.size}
                  </p>
                  <p className="font-bold text-shella-neon">{item.price} EGP</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => cart.updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                    className="p-1 border border-shella-line hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-bold">{item.quantity}</span>
                  <button
                    onClick={() => cart.updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                    className="p-1 border border-shella-line hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  onClick={() => cart.removeItem(item.productId, item.size, item.color)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-shella-card border-2 border-shella-line p-6 sticky top-20">
            <h2 className="font-display text-lg mb-6">{t.cart.orderSummary}</h2>

            <div className="space-y-3 mb-6 pb-6 border-b-2 border-shella-line">
              <div className="flex justify-between">
                <span>{t.cart.subtotal}</span>
                <span className="font-bold">{subtotal} EGP</span>
              </div>
              <div className="flex justify-between">
                <span>{t.cart.shipping}</span>
                <span className="font-bold">{shippingCost} EGP</span>
              </div>
            </div>

            <div className="flex justify-between mb-6 text-lg font-bold">
              <span>{t.cart.total}</span>
              <span className="text-shella-neon">{total} EGP</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-shella-neon text-white font-bold py-3 px-4 hover:bg-blue-600 transition mb-3"
            >
              {t.cart.checkout}
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="w-full border-2 border-shella-line font-bold py-3 px-4 hover:bg-gray-50 transition"
            >
              {t.cart.continueShopping}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
