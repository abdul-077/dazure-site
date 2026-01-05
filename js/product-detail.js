// Product Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || '1';
  
  const product = getProductById(productId);
  
  if (!product) {
    window.location.href = 'products.html';
    return;
  }
  
  let quantity = 1;
  
  // Update page content
  document.title = `${product.name} | LUMIÈRE`;
  
  // Breadcrumb
  const breadcrumbProduct = document.getElementById('breadcrumb-product');
  if (breadcrumbProduct) {
    breadcrumbProduct.textContent = product.name;
  }
  
  // Product image
  const productImage = document.getElementById('product-image');
  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.name;
  }
  
  // Product info
  document.getElementById('product-category').textContent = product.category;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-subtitle').textContent = product.subtitle;
  document.getElementById('product-price').textContent = '$' + product.price;
  document.getElementById('product-description').textContent = product.description;
  
  // Rating
  const productStars = document.getElementById('product-stars');
  if (productStars) {
    productStars.innerHTML = generateStars(product.rating);
  }
  
  const ratingText = document.getElementById('rating-text');
  if (ratingText) {
    ratingText.textContent = `${product.rating} (${product.reviews} reviews)`;
  }
  
  // Ingredients
  const ingredientsList = document.getElementById('ingredients-list');
  if (ingredientsList && product.ingredients) {
    ingredientsList.innerHTML = product.ingredients.map(ing => 
      `<span class="ingredient-tag">${ing}</span>`
    ).join('');
  }
  
  // Quantity controls
  const qtyValue = document.getElementById('qty-value');
  const qtyDecrease = document.getElementById('qty-decrease');
  const qtyIncrease = document.getElementById('qty-increase');
  
  if (qtyDecrease) {
    qtyDecrease.addEventListener('click', function() {
      if (quantity > 1) {
        quantity--;
        qtyValue.textContent = quantity;
      }
    });
  }
  
  if (qtyIncrease) {
    qtyIncrease.addEventListener('click', function() {
      quantity++;
      qtyValue.textContent = quantity;
    });
  }
  
  // Add to cart
  const addToCartBtn = document.getElementById('add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
      addToCart(product.id, quantity);
    });
  }
  
  // Thumbnail clicks
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      // In a real app, this would switch the main image
    });
  });
  
  // Related products
  const relatedProducts = document.getElementById('related-products');
  if (relatedProducts) {
    const related = products
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 4);
    
    // If not enough in same category, add from other categories
    if (related.length < 4) {
      const others = products
        .filter(p => p.id !== product.id && p.category !== product.category)
        .slice(0, 4 - related.length);
      related.push(...others);
    }
    
    relatedProducts.innerHTML = related.map(p => createProductCard(p)).join('');
  }
});
