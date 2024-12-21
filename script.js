if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('./sw.js').then( () => {
    console.log('Service Worker Registered')
   })
 })
}

    const productGrid = document.getElementById('productGrid');

    // Fetch products from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        // Loop through the products and create HTML cards
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';

          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-description">${product.description}</div>
          `;

          productGrid.appendChild(productCard);
        });
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
s
