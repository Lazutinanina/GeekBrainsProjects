/* 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */
/* 3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров (сущность Product);
3.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS. */

let catalog = [
    {
        product_id:  0,
        product: 'Свитер',
        price: 3500
    },
    {
        product_id: 1,
        product: 'Джинсы',
        price: 2500
    },
    {
        product_id: 2,
        product: 'Платье',
        price: 3000
    }
];

let cart = [
    // {
    // product_id: 2,
    // product: 'Платье',
    // price: 3000,
    // quantity: 1
    // } 
];

    let catalogBlock = document.querySelector('.catalog');
    let cartBlock = document.querySelector('.cart');
    let clearButton = document.querySelector('.clr-cart');
    clearButton.addEventListener('click', cleanCart);



if (catalog.length) {

    catalog.forEach(good => {
        catalogBlock.insertAdjacentHTML('beforeend', `<div class="good">
        <div><b>Наименование</b>: ${good.product}</div>
        <div><b>Цена за шт.</b>: ${good.price}</div>
        <button class="add-to-cart" product-id="${good.product_id}">В корзину</button>
        </div>`);
    });
};

const buttons = document.querySelectorAll('.add-to-cart');
    Array.from(buttons).forEach(button =>
    button.addEventListener("click", addToCart));

renderCartBlock (cart, cartBlock)

function renderCartBlock (cart, cartBlock) {

if (cart.length) {
    cartBlock.innerHTML = '';
    cart.forEach (item => {
        cartBlock.insertAdjacentHTML('beforeend', `<div class="item">
        <div><b>Наименование</b>: ${item.product}</div>
        <div><b>Цена за шт.</b>: ${item.price}</div>
        <div><b>Кол-во</b>: ${item.quantity}</div>
        </div>`);
    });
} else {
    cartBlock.innerHTML = '';
    cartBlock.insertAdjacentHTML('beforeend', 'Корзина пуста');
}
}

function addToCart(event) {
    const product_id = event.target.getAttribute('product-id');
    const isInCart = cart.find((item) => product_id == item.product_id);
    if (isInCart) {
        isInCart.quantity++;
    } else {
        const product = catalog.find((item) => product_id == item.product_id);
        cart.push({...product, quantity: 1});
    }
    renderCartBlock(cart, cartBlock);
}

function cleanCart() {
    cart = [];
    renderCartBlock(cart, cartBlock);
}
