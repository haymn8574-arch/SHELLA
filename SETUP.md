# SHELLA E-Commerce Setup Guide

## Quick Start

1. **Clone & Install**
```bash
git clone https://github.com/haymn8574-arch/SHELLA.git
cd SHELLA
npm install
```

2. **Development**
```bash
npm run dev
```
Open http://localhost:5173

3. **Admin Panel**
- Go to http://localhost:5173/admin
- Password: `12345`
- Change this in production!

## Store Configuration

### Contact Information
Update in `src/components/Footer.tsx`:
- ☎️ WhatsApp: 01272090526
- 📷 Instagram: @shella.egy

### Prices
- **T-Shirts**: 450 EGP
- **Shirts**: 900 EGP  
- **Suits**: 999 EGP
- **Shipping**: 75 EGP
- **Delivery**: 4 days

### Available Sizes
S, M, L, XL, XXL

### Available Colors
Black, White, Grey, Navy, Pink

## Adding Products

Edit `src/lib/products.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  category: 'suits' | 'tshirts-football' | 'tshirts-streetwear' | 'shirts' | 'tshirts-women',
  price: 450,
  description: 'Description',
  image: '/images/category/product.jpg',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
  stock: 100,
  createdAt: new Date()
}
```

## Admin Panel Features

✅ View all orders
✅ Update order status (Pending → Confirmed → Shipped → Delivered)
✅ Track payment status
✅ View customer information
✅ Delete orders
✅ Store settings

## Order Flow

1. Customer adds items to cart
2. Proceeds to checkout
3. Fills in personal & shipping info
4. Places order
5. Admin is notified
6. Admin collects 50% deposit
7. Order ships after deposit
8. Delivery within 4 days
9. Customer pays balance on delivery

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Manual Hosting
```bash
npm run build
# Upload 'dist' folder to your server
```

## Language Support

- 🇬🇧 English (LTR)
- 🇸🇦 العربية (RTL)

Switch with the language button in header.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## File Structure

```
SHELLA/
├── src/
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   ├── lib/                # Utilities & constants
│   ├── types/              # TypeScript types
│   ├── App.tsx             # Main component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite config
├── tailwind.config.js      # Tailwind config
└── package.json            # Dependencies
```

## Troubleshooting

**Images not loading?**
- Place images in `public/images/` folder
- Use path `/images/category/name.jpg`

**Cart not persisting?**
- Check browser localStorage is enabled
- Clear cache and reload

**Admin login not working?**
- Default password is `12345`
- Check `src/pages/Admin.tsx` for actual password

## Support

📱 WhatsApp: 01272090526
📷 Instagram: @shella.egy

---

**Built by Friends. Worn Loud.** 🔥
