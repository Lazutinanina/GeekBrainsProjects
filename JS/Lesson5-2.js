/* 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */
/* 3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров (сущность Product);
3.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS. */

let cart = [
    {
        product: 'Свитер',
        price: 3500,
        quantity: 4,
    },
    {
        product: 'Джинсы',
        price: 2500,
        quantity: 1,
    },
    {
        product: 'Платье',
        price: 3000,
        quantity: 2,
    },
]
    let cartBlock = document.querySelector('#catalog');
    
if (cart.length) {

    cart.forEach(good => {
        cartBlock.insertAdjacentHTML('beforeend', `<div class="good">
        <div><b>Наименование</b>: ${good.product}</div>
        <div><b>Цена за шт.</b>: ${good.price}</div>
        <div><b>Количество</b>: ${good.quantity}</div>
        <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
        </div>`);
    });

    let TotalCartPrice = cart.reduce(function (price, good) {
        return price = price + good.price * good.quantity;
    }, 0);

    cartBlock.insertAdjacentHTML("beforeend", `В корзине ${cart.length} товара(ов) на сумму ${TotalCartPrice} рублей`);
} else {
    cartBlock.insertAdjacentHTML("beforeend", 'Корзина пуста');
}