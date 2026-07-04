import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';
import ErrorBoundary from './components/ErrorBoundary';
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
    <ErrorBoundary language={language}>
      <Router>
        <div className="min-h-screen flex flex-col bg-shella-bg text-shella-fg">
          <div className="bg-pattern">
            <div className="grid-pattern"></div>
            <div className="neon-glow glow-1"></div>
            <div className="neon-glow glow-2"></div>
            <div className="neon-glow glow-3"></div>
          </div>
          
          <Header language={language} setLanguage={setLanguage} />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home language={language} />} />
              <Route path="/shop" element={<Shop language={language} />} />
              <Route path="/shop/:category" element={<Shop language={language} />} />
              <Route path="/cart" element={<Cart language={language} />} />
              <Route path="/checkout" element={<Checkout language={language} />} />
              <Route path="/admin" element={<Admin language={language} />} />
              <Route path="/admin/login" element={<Admin language={language} />} />
            </Routes>
          </main>
          <Footer language={language} />
          <ContactWidget />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
