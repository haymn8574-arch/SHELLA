import React from 'react';
import { Mail, Instagram, Phone } from 'lucide-react';
import { translations, Language } from '../lib/i18n';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="bg-shella-fg text-shella-card border-t-2 border-shella-line mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl mb-4">SHELLA</h3>
            <p className="text-sm text-gray-300 mb-4">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-shella-neon transition">Home</a></li>
              <li><a href="/shop" className="hover:text-shella-neon transition">Shop</a></li>
              <li><a href="#" className="hover:text-shella-neon transition">About</a></li>
              <li><a href="#" className="hover:text-shella-neon transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm mb-4 uppercase">{t.header.contact}</h4>
            <div className="space-y-3">
              <a href="https://wa.me/201272090526" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-shella-neon transition">
                <Phone size={18} />
                <span>01272090526</span>
              </a>
              <a href="https://www.instagram.com/shella.egy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-shella-neon transition">
                <Instagram size={18} />
                <span>@shella.egy</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
