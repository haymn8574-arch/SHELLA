import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, LogOut, LogIn } from 'lucide-react';
import { useCart } from '../lib/cart';
import { translations, Language } from '../lib/i18n';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const cart = useCart();
  const t = translations[language];

  React.useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    setIsAdmin(!!adminToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdmin(false);
  };

  return (
    <header className="bg-shella-bg border-b-2 border-shella-line sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-display text-shella-fg">
            SHELLA
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-shella-fg hover:text-shella-neon transition">
              {t.header.home}
            </Link>
            <Link to="/shop" className="text-shella-fg hover:text-shella-neon transition">
              {t.header.shop}
            </Link>
            <Link to="/shop/suits" className="text-shella-fg hover:text-shella-neon transition">
              {t.header.suits}
            </Link>
            <Link to="/shop/tshirts-streetwear" className="text-shella-fg hover:text-shella-neon transition">
              {t.header.tshirts}
            </Link>
            <Link to="/shop/shirts" className="text-shella-fg hover:text-shella-neon transition">
              {t.header.shirts}
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-3 py-1 border border-shella-line rounded text-sm font-mono"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} />
              {cart.getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-shella-neon text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.getTotalItems()}
                </span>
              )}
            </Link>

            {/* Admin or Login */}
            {isAdmin ? (
              <>
                <Link to="/admin" className="text-shella-neon hover:underline">
                  {t.header.admin}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-shella-fg hover:text-shella-neon"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <Link to="/admin" className="flex items-center gap-2 text-shella-fg hover:text-shella-neon">
                <LogIn size={20} />
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4">
            <Link to="/" className="block text-shella-fg hover:text-shella-neon">
              {t.header.home}
            </Link>
            <Link to="/shop" className="block text-shella-fg hover:text-shella-neon">
              {t.header.shop}
            </Link>
            <Link to="/shop/suits" className="block text-shella-fg hover:text-shella-neon">
              {t.header.suits}
            </Link>
            <Link to="/shop/tshirts-streetwear" className="block text-shella-fg hover:text-shella-neon">
              {t.header.tshirts}
            </Link>
            <Link to="/shop/shirts" className="block text-shella-fg hover:text-shella-neon">
              {t.header.shirts}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
