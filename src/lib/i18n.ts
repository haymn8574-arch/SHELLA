export const translations = {
  en: {
    header: {
      home: 'Home',
      shop: 'Shop',
      suits: 'Suits',
      tshirts: 'T-Shirts',
      shirts: 'Shirts',
      about: 'About',
      contact: 'Contact',
      cart: 'Cart',
      login: 'Login',
      logout: 'Logout',
      admin: 'Admin'
    },
    hero: {
      tagline: '/ 01 — Chapter 04 — Brotherhood',
      title: 'Built by Friends. Worn Loud.',
      description: 'Built by friends. Ayman, Gasser, Mohammed.',
      shopDrop: 'Shop the Drop ↗',
      ourStory: 'Our Story →'
    },
    shop: {
      allProducts: 'All Products',
      suits: 'Suits',
      footballTshirts: 'Football T-Shirts',
      streetwearTshirts: 'Streetwear T-Shirts',
      shirts: 'Shirts',
      womenTshirts: 'Women T-Shirts',
      price: 'Price',
      size: 'Size',
      color: 'Color',
      addToCart: 'Add to Cart',
      outOfStock: 'Out of Stock',
      inStock: 'In Stock'
    },
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      total: 'Total',
      checkout: 'Checkout',
      continueShopping: 'Continue Shopping'
    },
    checkout: {
      title: 'Checkout',
      personalInfo: 'Personal Information',
      shippingInfo: 'Shipping Information',
      orderSummary: 'Order Summary',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      city: 'City',
      placeOrder: 'Place Order',
      deposit: 'A deposit is required to confirm your order',
      depositAmount: 'Deposit Amount (50% of total)'
    },
    footer: {
      joinCircle: 'Join the circle',
      description: 'First access to drops, behind-the-scenes from the studio, and members-only releases.',
      subscribe: 'Subscribe',
      support: 'Live Support — Average reply under 10 minutes',
      copyright: '© 2026 SHELLA — Built by Friends'
    }
  },
  ar: {
    header: {
      home: 'الرئيسية',
      shop: 'المتجر',
      suits: 'السوت',
      tshirts: 'التيشرتات',
      shirts: 'القمصان',
      about: 'عن',
      contact: 'تواصل',
      cart: 'السلة',
      login: 'دخول',
      logout: 'خروج',
      admin: 'إدارة'
    },
    hero: {
      tagline: '/ ٠١ — الفصل الرابع — الأخوّة',
      title: 'صناعة الأصدقاء. بصوت عالي.',
      description: 'صناعة الأصدقاء. أيمن، جاسر، محمد.',
      shopDrop: 'اتسوق الدروب ↗',
      ourStory: 'قصتنا →'
    },
    shop: {
      allProducts: 'جميع المنتجات',
      suits: 'السوت',
      footballTshirts: 'تيشرتات كرة القدم',
      streetwearTshirts: 'تيشرتات ستريت وير',
      shirts: 'القمصان',
      womenTshirts: 'تيشرتات البنات',
      price: 'السعر',
      size: 'المقاس',
      color: 'اللون',
      addToCart: 'أضف للسلة',
      outOfStock: 'غير متوفر',
      inStock: 'متوفر'
    },
    cart: {
      title: 'سلة التسوق',
      empty: 'السلة فارغة',
      subtotal: 'المجموع',
      shipping: 'الشحن',
      total: 'الإجمالي',
      checkout: 'الدفع',
      continueShopping: 'متابعة التسوق'
    },
    checkout: {
      title: 'الدفع',
      personalInfo: 'المعلومات الشخصية',
      shippingInfo: 'معلومات الشحن',
      orderSummary: 'ملخص الطلب',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      address: 'العنوان',
      city: 'المدينة',
      placeOrder: 'تأكيد الطلب',
      deposit: 'يلزم دفع تحويل قبل الشحن',
      depositAmount: 'مبلغ التحويل (50% من الإجمالي)'
    },
    footer: {
      joinCircle: 'انضم للدائرة',
      description: 'أول من يعرف بالدروبس الجديدة وكواليس الاستوديو والإصدارات الحصرية.',
      subscribe: 'اشترك',
      support: 'دعم مباشر — متوسط الرد أقل من ١٠ دقائق',
      copyright: '© ٢٠٢٦ شيلا — صناعة الأصدقاء'
    }
  }
};

export type Language = 'en' | 'ar';
export type TranslationKey = keyof typeof translations.en;
