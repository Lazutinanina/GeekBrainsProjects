// // // 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let n = +prompt('Введите число:');
let i = 2
 while (i <= n) { //меньше или равно 100
    let d = 2; //делитель для проверки, берем 2, т.к. проверка условия начинается с 2х.
    while (i % d) {  //делится ли число на делитель без остатка, если делится без остатка выходим из цикла
        d++
    }
        if (i == d) { //Если это число равно делителю, то это простое число
            console.log(i);
        }
    i++
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let card = [
    {
        price: 250,
        quantity: 1
    },

    {
    price: 350,
    quantity: 5   
    }
]
function countBasketPrice(card) {
    let count = 0; // 0 потому что корзина изначально пустая
    card.forEach(function(entry) {
        count = count + (entry.price * entry.quantity);
    });
    return count;
}
console.log(countBasketPrice(card)); //Вызываю функцию и передаю массив

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for(let i = 0;i <= 9;console.log(i), i++) {
}

// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
let count = '';
for(let i = 1; i<=20; i++) {
    count = count  + 'x';
    console.log(count);
}