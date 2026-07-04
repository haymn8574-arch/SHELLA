import React from 'react';
import { useState } from 'react';
import { Language, translations } from '../lib/i18n';
import { Order } from '../types';
import { Eye, Edit2, Trash2, LogOut } from 'lucide-react';

interface AdminProps {
  language: Language;
}

const Admin: React.FC<AdminProps> = ({ language }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('adminToken');
  });

  const [adminPassword, setAdminPassword] = useState('');
  const [tab, setTab] = useState<'orders' | 'customers' | 'settings'>('orders');
  const [orders, setOrders] = useState<Order[]>(() => {
    return JSON.parse(localStorage.getItem('orders') || '[]');
  });
  const [customers, setCustomers] = useState<any[]>(() => {
    return JSON.parse(localStorage.getItem('customers') || '[]');
  });

  const ADMIN_PASSWORD = '12345'; // Change this in production!

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      localStorage.setItem('adminToken', 'true');
      setIsLoggedIn(true);
      setAdminPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    const updated = orders.map(o => o.id === orderId ? { ...o, status } : o);
    setOrders(updated);
    localStorage.setItem('orders', JSON.stringify(updated));
  };

  const updatePaymentStatus = (orderId: string, status: Order['paymentStatus']) => {
    const updated = orders.map(o => o.id === orderId ? { ...o, paymentStatus: status } : o);
    setOrders(updated);
    localStorage.setItem('orders', JSON.stringify(updated));
  };

  const deleteOrder = (orderId: string) => {
    if (confirm('Delete this order?')) {
      const updated = orders.filter(o => o.id !== orderId);
      setOrders(updated);
      localStorage.setItem('orders', JSON.stringify(updated));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-shella-card border-2 border-shella-line p-8 rounded">
          <h1 className="text-2xl font-display mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full border-2 border-shella-line p-3"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-shella-neon text-white font-bold py-3 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-display">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b-2 border-shella-line">
        <button
          onClick={() => setTab('orders')}
          className={`px-6 py-3 font-bold transition ${
            tab === 'orders'
              ? 'bg-shella-neon text-white'
              : 'text-shella-muted hover:text-shella-fg'
          }`}
        >
          Orders ({orders.length})
        </button>
        <button
          onClick={() => setTab('customers')}
          className={`px-6 py-3 font-bold transition ${
            tab === 'customers'
              ? 'bg-shella-neon text-white'
              : 'text-shella-muted hover:text-shella-fg'
          }`}
        >
          Customers ({customers.length})
        </button>
        <button
          onClick={() => setTab('settings')}
          className={`px-6 py-3 font-bold transition ${
            tab === 'settings'
              ? 'bg-shella-neon text-white'
              : 'text-shella-muted hover:text-shella-fg'
          }`}
        >
          Settings
        </button>
      </div>

      {/* Orders Tab */}
      {tab === 'orders' && (
        <div className="space-y-4">
          {orders.length === 0 ? (
            <p className="text-shella-muted">No orders yet</p>
          ) : (
            orders.map(order => (
              <div key={order.id} className="bg-shella-card border-2 border-shella-line p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-shella-muted mb-1">Order ID</p>
                    <p className="font-mono font-bold">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-shella-muted mb-1">Total</p>
                    <p className="font-bold text-lg">{order.totalAmount} EGP</p>
                  </div>
                  <div>
                    <p className="text-xs text-shella-muted mb-1">Items</p>
                    <p className="font-bold">{order.items.length} items</p>
                  </div>
                  <div>
                    <p className="text-xs text-shella-muted mb-1">Date</p>
                    <p className="font-bold">{new Date(order.createdAt).toLocaleDateString('en-EG')}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                    className="border-2 border-shella-line p-2 text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>

                  <select
                    value={order.paymentStatus}
                    onChange={(e) => updatePaymentStatus(order.id, e.target.value as Order['paymentStatus'])}
                    className="border-2 border-shella-line p-2 text-sm"
                  >
                    <option value="pending">Payment Pending</option>
                    <option value="paid">Payment Paid</option>
                  </select>

                  <button
                    onClick={() => alert(JSON.stringify(order, null, 2))}
                    className="flex items-center justify-center gap-2 border-2 border-shella-line hover:bg-gray-100 p-2 text-sm"
                  >
                    <Eye size={16} />
                    Details
                  </button>

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="flex items-center justify-center gap-2 bg-red-50 border-2 border-red-500 text-red-600 hover:bg-red-100 p-2 text-sm"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Customers Tab */}
      {tab === 'customers' && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-shella-card border-2 border-shella-line">
            <thead>
              <tr className="bg-shella-line text-white">
                <th className="p-3 text-left text-xs font-bold">Name</th>
                <th className="p-3 text-left text-xs font-bold">Email</th>
                <th className="p-3 text-left text-xs font-bold">Phone</th>
                <th className="p-3 text-left text-xs font-bold">City</th>
                <th className="p-3 text-left text-xs font-bold">Order ID</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, idx) => (
                <tr key={idx} className="border-b border-shella-line hover:bg-gray-50">
                  <td className="p-3 text-sm">{customer.fullName}</td>
                  <td className="p-3 text-sm font-mono">{customer.email}</td>
                  <td className="p-3 text-sm font-mono">{customer.phone}</td>
                  <td className="p-3 text-sm">{customer.city}</td>
                  <td className="p-3 text-sm font-mono font-bold text-shella-neon">{customer.orderId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Settings Tab */}
      {tab === 'settings' && (
        <div className="bg-shella-card border-2 border-shella-line p-6 max-w-2xl">
          <h2 className="font-display text-xl mb-6">Store Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Store Name</label>
              <input
                type="text"
                defaultValue="SHELLA"
                className="w-full border-2 border-shella-line p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Contact Phone</label>
              <input
                type="tel"
                defaultValue="01272090526"
                className="w-full border-2 border-shella-line p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Shipping Cost (EGP)</label>
              <input
                type="number"
                defaultValue="75"
                className="w-full border-2 border-shella-line p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Delivery Days</label>
              <input
                type="number"
                defaultValue="4"
                className="w-full border-2 border-shella-line p-3"
              />
            </div>
            <button className="px-6 py-3 bg-shella-neon text-white font-bold hover:bg-blue-600">
              Save Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
