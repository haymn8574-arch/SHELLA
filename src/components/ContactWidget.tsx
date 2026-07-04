import React from 'react';
import { X, MessageCircle } from 'lucide-react';

const ContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-40 w-14 h-14 bg-shella-neon text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Contact Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40 bg-shella-card border-2 border-shella-line rounded-lg p-4 w-72 shadow-lg">
          <h3 className="font-display text-sm mb-4">Get in Touch</h3>
          <div className="space-y-3">
            <a
              href="https://wa.me/201272090526"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded hover:bg-green-100 transition"
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-bold text-sm">WhatsApp</p>
                <p className="text-xs text-shella-muted">01272090526</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/shella.egy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 rounded hover:bg-purple-100 transition"
            >
              <span className="text-2xl">📷</span>
              <div>
                <p className="font-bold text-sm">Instagram</p>
                <p className="text-xs text-shella-muted">@shella.egy</p>
              </div>
            </a>
            <a
              href="mailto:contact@shella.eg"
              className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition"
            >
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-bold text-sm">Email</p>
                <p className="text-xs text-shella-muted">Support</p>
              </div>
            </a>
          </div>
          <p className="text-xs text-shella-muted mt-4 text-center">
            Average reply under 10 minutes
          </p>
        </div>
      )}
    </>
  );
};

export default ContactWidget;
