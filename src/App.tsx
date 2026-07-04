import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>(() => {
    return (localStorage.getItem('language') || 'en') as 'en' | 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-shella-bg text-shella-fg">
        <Header language={language} setLanguage={setLanguage} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/shop" element={<Shop language={language} />} />
            <Route path="/shop/:category" element={<Shop language={language} />} />
            <Route path="/cart" element={<Cart language={language} />} />
            <Route path="/checkout" element={<Checkout language={language} />} />
            <Route path="/admin" element={<Admin language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
