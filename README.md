# SHELLA - Built by Friends, Worn Loud

🔥 Independent streetwear label from Egypt with a full-featured e-commerce platform.

## Features

✅ **Bilingual** (English & Arabic with RTL support)
✅ **Full E-Commerce** - Shop, Cart, Checkout
✅ **Product Categories** - Suits, T-Shirts, Shirts
✅ **Admin Dashboard** - Manage orders, customers, settings
✅ **Local Storage** - No backend needed initially
✅ **Responsive Design** - Mobile & desktop
✅ **Modern UI** - Streetwear aesthetic

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/haymn8574-arch/SHELLA.git
cd SHELLA

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Admin Panel

- Navigate to `/admin`
- Default password: `12345`
- Change this in production!

## Project Structure

```
src/
├── components/        # Reusable components
├── pages/            # Page components
├── lib/              # Utilities (i18n, cart, products)
├── types/            # TypeScript types
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Technologies

- **React 19** - UI Library
- **React Router v6** - Routing
- **Tailwind CSS v3** - Styling
- **TypeScript** - Type safety
- **Zustand** - State management
- **Vite** - Build tool

## Customization

### Add Products

Edit `src/lib/products.ts` and add new products:

```typescript
{
  id: 'product-id',
  name: 'Product Name',
  category: 'suits' | 'tshirts-football' | 'tshirts-streetwear' | 'shirts' | 'tshirts-women',
  price: 999,
  description: 'Product description',
  image: '/images/product.jpg',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
  stock: 50,
  createdAt: new Date()
}
```

### Update Contact Info

Edit `src/components/Footer.tsx` to update:
- WhatsApp number
- Instagram handle
- Email

### Change Admin Password

Edit `src/pages/Admin.tsx` - update `ADMIN_PASSWORD` constant

## Deployment

### Build for Production

```bash
npm run build
npm run preview
```

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

## Contact

📱 WhatsApp: 01272090526
📧 Instagram: @shella.egy

## License

Copyright © 2026 SHELLA - Built by Friends
