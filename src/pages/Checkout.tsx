import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../lib/cart';
import { products } from '../lib/products';
import { Language, translations } from '../lib/i18n';
import { Order } from '../types';

interface CheckoutProps {
  language: Language;
}

const Checkout: React.FC<CheckoutProps> = ({ language }) => {
  const cart = useCart();
  const navigate = useNavigate();
  const t = translations[language];

  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });

  const [orderPlaced, setOrderPlaced] = React.useState(false);
  const [orderId, setOrderId] = React.useState('');

  const shippingCost = 75;
  const subtotal = cart.getTotalPrice();
  const total = subtotal + shippingCost;
  const deposit = Math.round(total * 0.5);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city) {
      alert('Please fill all fields');
      return;
    }

    // Create order
    const newOrder: Order = {
      id: 'ORD-' + Date.now(),
      userId: formData.email,
      items: cart.items,
      totalAmount: total,
      shippingCost,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: new Date(),
      deliveryDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) // 4 days
    };

    // Save to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Save customer info
    const customers = JSON.parse(localStorage.getItem('customers') || '[]');
    customers.push({ ...formData, orderId: newOrder.id });
    localStorage.setItem('customers', JSON.stringify(customers));

    setOrderId(newOrder.id);
    setOrderPlaced(true);
    cart.clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-green-50 border-2 border-green-500 p-8 rounded">
          <h1 className="text-4xl font-display mb-4 text-green-600">✓ Order Confirmed!</h1>
          <p className="text-lg mb-4">Thank you for your order</p>
          <p className="text-shella-muted mb-8">
            Order ID: <span className="font-mono font-bold text-shella-fg">{orderId}</span>
          </p>

          <div className="bg-white border-2 border-shella-line p-6 mb-8 rounded text-left">
            <h2 className="font-display text-lg mb-4">Next Steps:</h2>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-shella-neon">1.</span>
                <span>We'll contact you via WhatsApp or Phone to confirm the deposit amount</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-shella-neon">2.</span>
                <span>Transfer the deposit (50% of total) to our bank account</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-shella-neon">3.</span>
                <span>Once deposit is confirmed, we'll prepare and ship your order</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-shella-neon">4.</span>
                <span>You'll receive tracking information via WhatsApp</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-shella-neon">5.</span>
                <span>Delivery within 4 business days</span>
              </li>
            </ol>
          </div>

          <div className="text-sm text-shella-muted mb-8">
            <p className="mb-2">📱 We'll contact you at: <span className="font-mono font-bold text-shella-fg">{formData.phone}</span></p>
            <p>📧 Order details sent to: <span className="font-mono font-bold text-shella-fg">{formData.email}</span></p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-shella-neon text-white font-bold hover:bg-blue-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-display mb-8">{t.checkout.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-shella-card border-2 border-shella-line p-6 mb-6">
            <h2 className="font-display text-lg mb-4">{t.checkout.personalInfo}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">{t.checkout.fullName}</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border-2 border-shella-line p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">{t.checkout.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-2 border-shella-line p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">{t.checkout.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-2 border-shella-line p-3"
                />
              </div>
            </div>
          </div>

          <div className="bg-shella-card border-2 border-shella-line p-6">
            <h2 className="font-display text-lg mb-4">{t.checkout.shippingInfo}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">{t.checkout.address}</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border-2 border-shella-line p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">{t.checkout.city}</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border-2 border-shella-line p-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-shella-card border-2 border-shella-line p-6 sticky top-20">
            <h2 className="font-display text-lg mb-6">{t.checkout.orderSummary}</h2>

            <div className="space-y-3 mb-6 pb-6 border-b-2 border-shella-line max-h-48 overflow-y-auto">
              {cart.items.map((item, idx) => {
                const product = products.find(p => p.id === item.productId);
                return (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between">
                      <span className="font-bold">{product?.name}</span>
                    </div>
                    <div className="flex justify-between text-shella-muted">
                      <span>{item.color} • Size {item.size} x{item.quantity}</span>
                      <span>{item.price * item.quantity} EGP</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2 mb-6 pb-6 border-b-2 border-shella-line text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">{subtotal} EGP</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-bold">{shippingCost} EGP</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs text-shella-muted mb-2">Total Amount</p>
              <p className="text-2xl font-bold text-shella-neon mb-4">{total} EGP</p>

              <div className="bg-blue-50 border-2 border-shella-neon p-3 rounded text-xs">
                <p className="font-bold mb-2">50% Deposit Required</p>
                <p className="text-shella-neon font-bold text-lg">{deposit} EGP</p>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-shella-neon text-white font-bold py-3 px-4 hover:bg-blue-600 transition"
            >
              {t.checkout.placeOrder}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
