import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations, Language } from '../lib/i18n';

interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const t = translations[language];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">/ 01 — Chapter 04 — Brotherhood</p>
            <h1 className="font-display text-4xl md:text-5xl mb-4">
              {t.hero.title}
            </h1>
            <p className="text-lg mb-6 text-shella-muted">
              {t.hero.description}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/shop')}
                className="px-6 py-3 bg-shella-neon text-white font-bold hover:bg-blue-600 transition"
              >
                {t.hero.shopDrop}
              </button>
              <button
                onClick={() => navigate('/shop/suits')}
                className="px-6 py-3 border-2 border-shella-neon text-shella-neon font-bold hover:bg-shella-neon hover:text-white transition"
              >
                Suits
              </button>
            </div>
          </div>
          <div className="w-full h-96 bg-gradient-to-br from-shella-neon to-shella-bg rounded-lg flex items-center justify-center">
            <div className="text-center text-shella-fg">
              <p className="text-6xl font-display mb-4">SHELLA</p>
              <p className="text-shella-muted">Built by Friends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-display mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Suits', category: 'suits', icon: '👔' },
            { title: 'T-Shirts', category: 'tshirts-streetwear', icon: '👕' },
            { title: 'Shirts', category: 'shirts', icon: '🎽' },
          ].map(collection => (
            <button
              key={collection.category}
              onClick={() => navigate(`/shop/${collection.category}`)}
              className="p-8 bg-shella-card border-2 border-shella-line hover:shadow-lg transition text-center"
            >
              <p className="text-5xl mb-4">{collection.icon}</p>
              <h3 className="font-display text-xl mb-2">{collection.title}</h3>
              <p className="text-shella-muted">Browse Collection →</p>
            </button>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 mb-16">
        <h2 className="text-3xl font-display mb-8">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4 text-shella-muted">
              SHELLA started with a small group of friends, a sewing machine, and a stack of late-night sketches.
            </p>
            <p className="text-lg text-shella-muted">
              No investors. No marketing playbook. Just trust — and a shared belief that what we wear says who we are.
            </p>
          </div>
          <div className="bg-shella-card border-2 border-shella-line p-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-display text-3xl text-shella-neon">04</p>
                <p className="text-sm text-shella-muted">Founders</p>
              </div>
              <div>
                <p className="font-display text-3xl text-shella-neon">12</p>
                <p className="text-sm text-shella-muted">Drops</p>
              </div>
              <div>
                <p className="font-display text-3xl text-shella-neon">100%</p>
                <p className="text-sm text-shella-muted">Independent</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
