# SHELLA Streetwear E-Commerce Platform

🔥 **Built by Friends. Worn Loud.**

A complete, modern e-commerce solution for SHELLA - an independent Egyptian streetwear label.

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/haymn8574-arch/SHELLA.git
cd SHELLA

# 2. Install dependencies
npm install

# 3. Start development
npm run dev

# 4. Open in browser
# http://localhost:5173
```

## 🎯 Features

### 🛍️ E-Commerce
- ✅ Full product catalog (Suits, T-Shirts, Shirts)
- ✅ Shopping cart with local storage
- ✅ Checkout with customer info collection
- ✅ Order confirmation & tracking
- ✅ Filter by category

### 🌍 Bilingual
- ✅ English (LTR)
- ✅ العربية (RTL)
- ✅ Real-time language switching

### 👨‍💼 Admin Dashboard
- ✅ View all orders
- ✅ Update order status (Pending → Shipped → Delivered)
- ✅ Track payment status
- ✅ Customer information
- ✅ Store settings
- ✅ Delete/manage orders

### 💳 Payment System
- ✅ Cash on Delivery (COD)
- ✅ 50% deposit before shipping
- ✅ Automatic order tracking
- ✅ Deposit calculation

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Desktop optimization
- ✅ Tablet support
- ✅ Smooth animations

## 📋 Product Catalog

### Suits (999 EGP)
- Premium Black Tracksuit
- Urban Grey Set
- Classic Navy Tracksuit

### T-Shirts - Football (450 EGP)
- Goal Striker Tee
- Champions League Tee
- Victory Graphic Tee

### T-Shirts - Streetwear (450 EGP)
- Burn Flame Tee
- Trust Your Crazy Idea Tee
- Shadow Web Tee
- Monochrome Face Tee
- Diffuse Noise Tee
- Star Spray Tee
- Shadow Hands Tee
- Aymoon Flame Tee
- Halo Sketch Tee

### Youth Shirts (900 EGP)
- Classic White Shirt
- Bold Pattern Shirt
- Navy Urban Shirt
- Casual Grey Shirt

### Women's T-Shirts (450 EGP)
- Floral Cream Tee
- Pink Butterfly Tee
- Black Crop Hoodie
- Baby 90 Ringer Tee
- Vintage Band Tee

## 🎨 Design System

**Colors:**
- Background: `#f6f5f0` (warm off-white)
- Foreground: `#101013` (near-black)
- Neon Blue: `#1e6bff` (accents & CTAs)
- Muted: `#5a5a63` (secondary text)
- Card: `#ffffff` (product tiles)

**Typography:**
- Display: Archivo Black, Anton, Impact
- Body: System UI, Segoe UI, Inter
- Mono: Menlo, SFMono, UI Monospace

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push origin gh-pages
```

## 📁 Project Structure

```
SHELLA/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Full page components
│   ├── lib/           # Utilities & constants
│   ├── types/         # TypeScript definitions
│   ├── App.tsx        # Main app wrapper
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS config
├── package.json       # Dependencies
└── README.md          # This file
```

## 🔧 Configuration

### Update Prices
Edit `src/lib/products.ts`:
```typescript
price: 999  // Update this value
```

### Update Contact Info
Edit `src/components/Footer.tsx`:
```typescript
WhatsApp: 01272090526
Instagram: @shella.egy
```

### Change Admin Password
Edit `src/pages/Admin.tsx`:
```typescript
const ADMIN_PASSWORD = 'your-password';
```

### Add Products
Edit `src/lib/products.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  category: 'suits',
  price: 999,
  description: 'Description',
  image: '/images/suits/product.jpg',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
  stock: 100,
  createdAt: new Date()
}
```

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v3
- **State:** Zustand, React Context
- **Build:** Vite 5
- **Icons:** Lucide React
- **Storage:** Browser LocalStorage

## 📞 Contact

- 📱 **WhatsApp:** 01272090526
- 📸 **Instagram:** @shella.egy
- 💬 **Average reply:** Under 10 minutes

## 📝 Store Settings

- **Shipping Cost:** 75 EGP
- **Delivery Time:** 4 business days
- **Available Sizes:** S, M, L, XL, XXL
- **Available Colors:** Black, White, Grey, Navy, Pink
- **Payment Method:** Cash on Delivery (COD)
- **Deposit Required:** 50% before shipping

## 🔐 Admin Access

- **URL:** `/admin`
- **Default Password:** `12345`
- ⚠️ **Change in production!**

## 📊 Order Flow

1. Customer browses products
2. Adds items to cart
3. Proceeds to checkout
4. Enters personal & shipping info
5. Places order
6. Admin receives notification
7. Admin collects 50% deposit
8. Order ships after payment
9. Delivery within 4 days
10. Customer pays balance on delivery

## 🐛 Troubleshooting

**Images not showing?**
- Create `public/images/` folder structure
- Place images by category

**Cart not persisting?**
- Enable localStorage in browser
- Check browser console for errors

**Admin panel not loading?**
- Clear browser cache
- Check console for errors
- Verify password is correct

## 📄 License

Copyright © 2026 SHELLA - Built by Friends

---

**Made with ❤️ for the streetwear community**
