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

function countBasketPrice(card) {
    let count = 0; // 0 потому что каталог изначально пустой
    card.forEach(function(entry) {
        count = count + (entry.price * entry.quantity);
    });
    return count;
}
console.log(countBasketPrice(cart)); //Вызываю функцию и передаю массив