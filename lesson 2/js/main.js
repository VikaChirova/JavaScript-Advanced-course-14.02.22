var btnBasket = document.getElementById('basket-btn');
var goodsListSection = document.getElementById('goods-list-block');

//Создаем класс для товаров в корзине
class GoodsItem {
   constructor(title, price, img = 'https://via.placeholder.com/150') {
      this.title = title;
      this.price = price;
      this.img = img;
   }
   //данный метод отрисыает корзину,  возвращает html-разметку
   render() {
      return `<div class="goods-list-block-item">
        <h3 class="goods-list-block-title">${this.title}</h3>
        <p class="goods-list-block-price">${this.price}</p>
        <img class="goods-list-block-img" src=${this.img} alt="image">
        </div>`
   }
}

//Создаем класс для списка товаров GoodsList
class GoodsList {
   constructor() {
      this.goods = [];
   }
   //Заолняем список goods
   fetchGoods() {
      this.goods = [
         { title: 'Notebook', price: 1500 },
         { title: 'Gamepad', price: 450 },
         { title: 'Keyboard', price: 300 },
         { title: 'Mouse', price: 500 },
      ];
   }
}

//Создаем класс корзина Cart
class Cart {
   constructor() {
      this.goods = [];
   }
   //метод добавления товара в корзину
   addCartItem(cartItem) {
      this.goods.push(cartItem);
   }

   //Метод totalCartPrice для вывода итоговой суммы корзины
   totalCartPrice() {
      let totalPrice = document.getElementById('goods-list-total');
      let sum = 0;
      this.goods.forEach(good => {
         sum += good.price
      });
      totalPrice.innerText = `Итоговая сумма  ${sum} рублей`;
   }

   render() {
      let listHtml = '';
      let goodsList = document.getElementById('goods-list-product');

      this.goods.forEach(good => {
         const goodItem = new GoodsItem(good.title, good.price, good.img);
         listHtml += goodItem.render();
      });
      goodsList.innerHTML = listHtml;
   }
}
//наданный момент выводим каждый товар в списке (нужно доработать,чтобывыводился лишьэеент по клику "добавить в корзину")
var renderCart = () => {
   const list = new GoodsList();
   const cart = new Cart();

   list.fetchGoods();
   cart.addCartItem(list.goods[0]);
   cart.addCartItem(list.goods[1]);
   cart.addCartItem(list.goods[2]);
   cart.addCartItem(list.goods[3]);
   cart.render();

   cart.totalCartPrice();
   goodsListSection.style.display = 'block';
};
btnBasket.addEventListener('click', renderCart);
window.addEventListener('click', function (evt) { console.log(evt) });