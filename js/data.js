// Product Data
const products = [
  {
    id: '1',
    name: 'Luminous Elixir',
    subtitle: 'Radiance Serum',
    price: 285,
    image: 'assets/product-1.svg',
    category: 'serums',
    description: 'A transcendent serum that captures light itself. Infused with micro-pearls and botanical luminizers, this elixir transforms skin into a canvas of pure radiance.',
    ingredients: ['Micro-Pearl Complex', 'Vitamin C', 'Hyaluronic Acid', 'Rose Extract'],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: '2',
    name: 'Crystal Veil',
    subtitle: 'Hydrating Mist',
    price: 145,
    image: 'assets/product-2.svg',
    category: 'mists',
    description: 'An ethereal mist that envelops skin in a protective veil of hydration. Derived from glacial springs and infused with crystalline minerals.',
    ingredients: ['Glacial Water', 'Rose Quartz Infusion', 'Aloe Vera', 'Chamomile'],
    rating: 4.8,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Velvet Essence',
    subtitle: 'Night Repair Cream',
    price: 320,
    image: 'assets/product-3.svg',
    category: 'creams',
    description: 'A luxurious night cream that works while you dream. Its velvet texture melts into skin, delivering profound restoration and renewal.',
    ingredients: ['Retinol', 'Peptide Complex', 'Squalane', 'Orchid Extract'],
    rating: 5.0,
    reviews: 156,
  },
  {
    id: '4',
    name: 'Silk Nectar',
    subtitle: 'Cleansing Balm',
    price: 175,
    image: 'assets/product-4.svg',
    category: 'cleansers',
    description: 'A transformative balm that dissolves impurities while nourishing skin. Melts from solid to silk upon contact, leaving a dewy finish.',
    ingredients: ['Camellia Oil', 'Vitamin E', 'Moringa Extract', 'Shea Butter'],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: '5',
    name: 'Opal Glow',
    subtitle: 'Illuminating Oil',
    price: 225,
    image: 'assets/product-5.svg',
    category: 'oils',
    description: 'A precious blend of botanical oils that imparts an opalescent glow. Absorbs instantly, leaving skin luminous without residue.',
    ingredients: ['Rosehip Oil', 'Jojoba Oil', 'Opal Particles', 'Vitamin F'],
    rating: 4.9,
    reviews: 78,
  },
  {
    id: '6',
    name: 'Moonstone Mask',
    subtitle: 'Restorative Treatment',
    price: 195,
    image: 'assets/product-6.svg',
    category: 'masks',
    description: 'A weekly ritual of profound restoration. This creamy mask harnesses lunar botanicals to reveal refreshed, moonlit skin.',
    ingredients: ['White Clay', 'Moonflower Extract', 'Niacinamide', 'Honey'],
    rating: 4.8,
    reviews: 134,
  },
  {
    id: '7',
    name: 'Aurora Drops',
    subtitle: 'Brightening Concentrate',
    price: 265,
    image: 'assets/product-7.svg',
    category: 'serums',
    description: 'Concentrated drops of pure luminosity. This potent formula targets dark spots and uneven tone for a complexion that glows like dawn.',
    ingredients: ['Alpha Arbutin', 'Licorice Root', 'Vitamin C', 'Ferulic Acid'],
    rating: 4.9,
    reviews: 112,
  },
  {
    id: '8',
    name: 'Rose Quartz Eye',
    subtitle: 'Eye Revitalizing Gel',
    price: 185,
    image: 'assets/product-8.svg',
    category: 'eyes',
    description: 'A cooling gel that revitalizes tired eyes. Infused with rose quartz essence, it reduces puffiness and brightens the delicate eye area.',
    ingredients: ['Caffeine', 'Rose Quartz Powder', 'Cucumber Extract', 'Peptides'],
    rating: 4.7,
    reviews: 95,
  },
];

const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'serums', name: 'Serums', count: products.filter(p => p.category === 'serums').length },
  { id: 'creams', name: 'Creams', count: products.filter(p => p.category === 'creams').length },
  { id: 'oils', name: 'Oils', count: products.filter(p => p.category === 'oils').length },
  { id: 'cleansers', name: 'Cleansers', count: products.filter(p => p.category === 'cleansers').length },
  { id: 'mists', name: 'Mists', count: products.filter(p => p.category === 'mists').length },
  { id: 'masks', name: 'Masks', count: products.filter(p => p.category === 'masks').length },
  { id: 'eyes', name: 'Eye Care', count: products.filter(p => p.category === 'eyes').length },
];

// Helper function to get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Helper function to create product card HTML
function createProductCard(product) {
  return `
    <article class="product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
      <div class="product-card-image">
        <div class="product-card-glow"></div>
        <img src="${product.image}" alt="${product.name}">
        <div class="product-card-actions">
          <button class="product-action-btn" onclick="event.stopPropagation(); addToCart('${product.id}')" aria-label="Add to cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
          <button class="product-action-btn" onclick="event.stopPropagation();" aria-label="Add to wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="product-card-content">
        <span class="product-card-category">${product.category}</span>
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-subtitle">${product.subtitle}</p>
        <div class="product-card-footer">
          <span class="product-card-price">$${product.price}</span>
          <div class="product-card-rating">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>${product.rating}</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Generate star rating HTML
function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars += `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    } else if (i < rating) {
      stars += `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    } else {
      stars += `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
  }
  return stars;
}
