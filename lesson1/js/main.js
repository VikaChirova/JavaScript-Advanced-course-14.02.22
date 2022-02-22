const products = [
   { id: 1, title: 'Notebook', price: 1500 },
   { id: 2, title: 'Gamepad', price: 450 },
   { id: 3, title: 'Keyboard', price: 300 },
   { id: 4, title: 'Mouse', price: 500 },
];

const renderProduct = (title, price, img = 'https://via.placeholder.com/150') => {
   return `<div class="product-item">
            <img src="${img}" alt="image" class="product-img">
            <h3 class="product-title">${title}</h3>
            <p class="product-price">${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = list => {
   const productList = list.map(item => renderProduct(item.title, item.price));
   document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);
