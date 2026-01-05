// Products Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  let currentCategory = 'all';
  let currentSort = 'featured';
  let maxPrice = 400;
  
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  if (categoryParam) {
    currentCategory = categoryParam;
  }
  
  // Render categories
  const categoryList = document.getElementById('category-list');
  if (categoryList) {
    categoryList.innerHTML = categories.map(cat => `
      <li class="category-item ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
        <span>${cat.name}</span>
        <span class="category-count">${cat.count}</span>
      </li>
    `).join('');
    
    // Category click handlers
    categoryList.querySelectorAll('.category-item').forEach(item => {
      item.addEventListener('click', function() {
        currentCategory = this.dataset.category;
        categoryList.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        renderProducts();
      });
    });
  }
  
  // Sort select handler
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      currentSort = this.value;
      renderProducts();
    });
  }
  
  // Price range handler
  const priceRange = document.getElementById('price-range');
  const priceMax = document.getElementById('price-max');
  if (priceRange && priceMax) {
    priceRange.addEventListener('input', function() {
      maxPrice = parseInt(this.value);
      priceMax.textContent = '$' + maxPrice;
      renderProducts();
    });
  }
  
  // Render products
  function renderProducts() {
    let filtered = [...products];
    
    // Filter by category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    // Filter by price
    filtered = filtered.filter(p => p.price <= maxPrice);
    
    // Sort
    switch (currentSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    // Update count
    const productsCount = document.getElementById('products-count');
    if (productsCount) {
      productsCount.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
    }
    
    // Render grid
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
      if (filtered.length === 0) {
        productsGrid.innerHTML = `
          <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
            <p style="color: var(--color-text-muted);">No products found matching your criteria.</p>
          </div>
        `;
      } else {
        productsGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
      }
    }
  }
  
  // Initial render
  renderProducts();
});
