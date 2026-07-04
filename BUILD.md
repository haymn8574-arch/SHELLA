# Build instructions

## Prerequisites
- Node.js 18+
- npm or yarn

## Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

Create a `.env.local` file:

```
VITE_API_URL=http://localhost:5000
VITE_STORE_NAME=SHELLA
VITE_CONTACT_PHONE=01272090526
VITE_ADMIN_PASSWORD=12345
```

## Deployment Guides

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Traditional Hosting

```bash
npm run build
# Upload dist/ folder to server
```

## Project Structure

```
SHELLA/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ShopGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ContactWidget.tsx
│   │   └── ErrorBoundary.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   └── Admin.tsx
│   ├── lib/
│   │   ├── i18n.ts (Bilingual translations)
│   │   ├── products.ts (Product data)
│   │   ├── productData.ts (Extended product data)
│   │   └── cart.ts (Cart management)
│   ├── types/
│   │   └── index.ts (TypeScript types)
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/ (Product images folder)
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── package.json
├── server.js (Optional backend)
└── README.md
```

## Key Features

✅ **Fully Functional E-Commerce**
- Product catalog with filters
- Shopping cart with persistent storage
- Checkout with customer info collection
- Order confirmation system

✅ **Admin Dashboard**
- View all orders
- Update order status
- Track payments
- Customer management
- Store settings

✅ **Bilingual Support**
- English (LTR)
- Arabic (RTL)
- Automatic language switching

✅ **Modern Design**
- Streetwear aesthetic
- Responsive layout
- Smooth animations
- Professional UI

✅ **Local Storage**
- No backend required initially
- Data persists in browser
- Easy to migrate to backend

## Product Categories

- 🧥 **Suits** - 999 EGP
- 👕 **T-Shirts (Football)** - 450 EGP
- 👔 **T-Shirts (Streetwear)** - 450 EGP
- 👗 **Shirts (Youth)** - 900 EGP
- 👩‍🦱 **T-Shirts (Women)** - 450 EGP

## Customization

### Update Prices
Edit `src/lib/products.ts` and update the `price` field for each product.

### Add New Products
Add new product objects to `src/lib/products.ts`:

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

### Update Contact Info
Edit `src/components/Footer.tsx` and `src/components/ContactWidget.tsx`:
- WhatsApp: 01272090526
- Instagram: @shella.egy
- Email: contact@shella.eg

### Change Admin Password
Edit `src/pages/Admin.tsx`:
```typescript
const ADMIN_PASSWORD = 'your-new-password';
```

### Update Colors & Branding
Edit `tailwind.config.js`:
```javascript
colors: {
  'shella-bg': '#f6f5f0',
  'shella-fg': '#101013',
  'shella-neon': '#1e6bff',
  // ...
}
```

## Troubleshooting

**Images not loading?**
- Create `public/images/` folder
- Organize by category: `public/images/suits/`, etc.
- Use path `/images/category/product.jpg`

**Cart not saving?**
- Check if browser allows localStorage
- Check browser console for errors
- Try clearing cache and reloading

**Admin panel not working?**
- Verify default password: `12345`
- Check localStorage for adminToken
- Try clearing browser data

## Support & Contact

📱 WhatsApp: 01272090526
📸 Instagram: @shella.egy
💬 Feel free to reach out for any questions!

---

**Built by Friends. Worn Loud.** 🔥
