import { Product } from '../types';

export const suitsData = [
  {
    id: 'suit-001',
    name: 'Premium Black Tracksuit',
    category: 'suits' as const,
    price: 999,
    description: 'Complete tracksuit set with premium cotton blend. Perfect for streetwear aesthetic.',
    image: '/images/suits/suit-001.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 50,
    createdAt: new Date()
  },
  {
    id: 'suit-002',
    name: 'Urban Grey Set',
    category: 'suits' as const,
    price: 999,
    description: 'Modern grey tracksuit with oversized fit. Statement piece for urban style.',
    image: '/images/suits/suit-002.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Black', 'White', 'Navy', 'Pink'],
    stock: 45,
    createdAt: new Date()
  },
  {
    id: 'suit-003',
    name: 'Classic Navy Tracksuit',
    category: 'suits' as const,
    price: 999,
    description: 'Timeless navy tracksuit for everyday wear. Comfortable and versatile.',
    image: '/images/suits/suit-003.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Black', 'White', 'Grey', 'Pink'],
    stock: 55,
    createdAt: new Date()
  }
];

export const footballTShirts = [
  {
    id: 'tshirt-football-001',
    name: 'Goal Striker Tee',
    category: 'tshirts-football' as const,
    price: 450,
    description: 'Bold football-inspired graphic tee with premium cotton.',
    image: '/images/tshirts-football/tshirt-001.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 100,
    createdAt: new Date()
  },
  {
    id: 'tshirt-football-002',
    name: 'Champions League Tee',
    category: 'tshirts-football' as const,
    price: 450,
    description: 'Premium oversized tee with football championship vibes.',
    image: '/images/tshirts-football/tshirt-002.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 85,
    createdAt: new Date()
  },
  {
    id: 'tshirt-football-003',
    name: 'Victory Graphic Tee',
    category: 'tshirts-football' as const,
    price: 450,
    description: 'Oversized tee with bold victory graphic. Perfect for football fans.',
    image: '/images/tshirts-football/tshirt-003.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 75,
    createdAt: new Date()
  }
];

export const streetwearTShirts = [
  {
    id: 'tshirt-streetwear-001',
    name: 'Burn Flame Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'White oversized tee with bold black typography and red flame artwork.',
    image: '/images/tshirts-streetwear/tshirt-001.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 120,
    createdAt: new Date()
  },
  {
    id: 'tshirt-streetwear-002',
    name: 'Trust Your Crazy Idea Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'Washed black oversized tee featuring raw red hand-painted lettering.',
    image: '/images/tshirts-streetwear/tshirt-002.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 110,
    createdAt: new Date()
  },
  {
    id: 'tshirt-streetwear-003',
    name: 'Shadow Web Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'Black oversized tee with cracked spider-web illustration.',
    image: '/images/tshirts-streetwear/tshirt-003.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 95,
    createdAt: new Date()
  },
  {
    id: 'tshirt-streetwear-004',
    name: 'Monochrome Face Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'Mineral-washed black tee with distressed face artwork.',
    image: '/images/tshirts-streetwear/tshirt-004.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 88,
    createdAt: new Date()
  },
  {
    id: 'tshirt-streetwear-005',
    name: 'Diffuse Noise Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'Black oversized tee with blurred white typographic back print.',
    image: '/images/tshirts-streetwear/tshirt-005.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 105,
    createdAt: new Date()
  },
  {
    id: 'tshirt-streetwear-006',
    name: 'Star Spray Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'White oversized tee finished with a large spray-painted star graphic.',
    image: '/images/tshirts-streetwear/tshirt-006.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 99,
    createdAt: new Date()
  },
  {
    id: 'tshirt-streetwear-007',
    name: 'Shadow Hands Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'Cream oversized tee with blurred shadow figures and scattered handprint graphics.',
    image: '/images/tshirts-streetwear/tshirt-007.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 92,
    createdAt: new Date()
  },
  {
    id: 'tshirt-streetwear-008',
    name: 'Aymoon Flame Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'Black oversized tee with iridescent purple flame-style typography on the front.',
    image: '/images/tshirts-streetwear/tshirt-008.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 98,
    createdAt: new Date()
  },
  {
    id: 'tshirt-streetwear-009',
    name: 'Halo Sketch Tee',
    category: 'tshirts-streetwear' as const,
    price: 450,
    description: 'Black oversized tee featuring layered sketch graphics and halo motifs on the back.',
    image: '/images/tshirts-streetwear/tshirt-009.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 87,
    createdAt: new Date()
  }
];

export const shirtsData = [
  {
    id: 'shirt-001',
    name: 'Classic White Shirt',
    category: 'shirts' as const,
    price: 900,
    description: 'Premium white casual shirt for youth. Versatile and timeless.',
    image: '/images/shirts/shirt-001.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 75,
    createdAt: new Date()
  },
  {
    id: 'shirt-002',
    name: 'Bold Pattern Shirt',
    category: 'shirts' as const,
    price: 900,
    description: 'Youth shirt with bold pattern. Perfect for making a statement.',
    image: '/images/shirts/shirt-002.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 60,
    createdAt: new Date()
  },
  {
    id: 'shirt-003',
    name: 'Navy Urban Shirt',
    category: 'shirts' as const,
    price: 900,
    description: 'Sleek navy shirt for modern urban style. Great fit and comfort.',
    image: '/images/shirts/shirt-003.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 70,
    createdAt: new Date()
  },
  {
    id: 'shirt-004',
    name: 'Casual Grey Shirt',
    category: 'shirts' as const,
    price: 900,
    description: 'Comfortable grey shirt for everyday wear. Relaxed fit.',
    image: '/images/shirts/shirt-004.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 65,
    createdAt: new Date()
  }
];

export const womenTShirts = [
  {
    id: 'tshirt-women-001',
    name: 'Floral Cream Tee',
    category: 'tshirts-women' as const,
    price: 450,
    description: 'Oversized cream tee with delicate floral embroidery.',
    image: '/images/tshirts-women/tshirt-001.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 70,
    createdAt: new Date()
  },
  {
    id: 'tshirt-women-002',
    name: 'Pink Butterfly Tee',
    category: 'tshirts-women' as const,
    price: 450,
    description: 'Pastel pink oversized tee with vibrant butterfly graphic.',
    image: '/images/tshirts-women/tshirt-002.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 65,
    createdAt: new Date()
  },
  {
    id: 'tshirt-women-003',
    name: 'Black Crop Hoodie',
    category: 'tshirts-women' as const,
    price: 450,
    description: 'Cropped black hoodie with minimal logo. Heavyweight fleece.',
    image: '/images/tshirts-women/tshirt-003.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 55,
    createdAt: new Date()
  },
  {
    id: 'tshirt-women-004',
    name: 'Baby 90 Ringer Tee',
    category: 'tshirts-women' as const,
    price: 450,
    description: 'White ringer baby tee with vintage 90s graphic. Fitted cut.',
    image: '/images/tshirts-women/tshirt-004.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 48,
    createdAt: new Date()
  },
  {
    id: 'tshirt-women-005',
    name: 'Vintage Band Tee',
    category: 'tshirts-women' as const,
    price: 450,
    description: 'Oversized vintage band graphic tee. Classic streetwear style.',
    image: '/images/tshirts-women/tshirt-005.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy', 'Pink'],
    stock: 62,
    createdAt: new Date()
  }
];
