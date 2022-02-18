'use strict';
class ProductList {
   constructor(container = '.products') {
      this._container = document.querySelector(container);
      this._goods = [];
      this._allProducts = [];

      this._fetchGoods();
      this._render();
   }

   _fetchGoods() {
      this._goods = [
         { id: 1, title: 'Notebook', price: 1500 },
         { id: 2, title: 'Gamepad', price: 450 },
         { id: 3, title: 'Keyboard', price: 300 },
         { id: 4, title: 'Mouse', price: 500 },
      ];
   }

   _render() {
      for (const product of this._goods) {
         const productObject = new ProductItem(product);

         this._allProducts.push(productObject);
         this._container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
      }
   }
}

class ProductItem {
   constructor(product, img = 'https://via.placeholder.com/150') {
      this.id = product.id;
      this.title = product.title;
      this.price = product.price;
      this.img = img;
   }

   getHTMLString() {
      return `<div class="product-item data-id="${this.id}">
        <img src="${this.img}" alt="image" class="product-img">
        <h3 class="product-title">${this.title}</h3>
        <p class="product-price">${this.price}</p>
        <button class="by-btn">Добавить</button>
      </div>`;
   }
}

new ProductList();

