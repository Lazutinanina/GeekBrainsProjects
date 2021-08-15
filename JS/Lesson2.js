// 1. Дан код: Почему код даёт именно такие результаты?
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);      /* a увеличивается на 1, получаем 2  */    // 2
// d = b++; alert(d);       /* b увеличивается на 1, становится 2, но в d передается предыдущее значение, т.е 1  */   // 1
// c = (2+ ++a); alert(c);    /* a было двойкой, увеличилось на 1, и плюс 2, получаем 5  */ // 5
// d = (2+ b++); alert(d);     /* b было двойкой, увеличивается на 1, становится 3, но передаем предыдущее значение т.е 2, и прибавляем 2, выходит 4 */ // 4
// alert(a);     /* a было 2, в последней операции преобразовалось в 3  */              // 3
// alert(b);      /* b было 2, в последней операции преобразовалось в 3 */               // 3


// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
alert(x);


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let a = +prompt('Введите число.');
let b = +prompt('Введите число.');

if (a >= 0 && b >=0) {
let c = a - b;
alert(c);
}
else if(a <= 0 && b <=0) {
    let c = a * b;
    alert(c);
}
else if ((a >= 0 && b <=0 ) || (a <= 0 && b >=0)) {
let c = a + b;
alert(c);
}
/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */

let a = prompt('Введите число от 0 до 15');
let output_string = '';
switch (a) {
case '0':
    output_string = output_string + '0, ' 

case  '1': 
output_string = output_string + '1, '

case  '2': 
output_string = output_string + '2, '

case  '3': 
output_string = output_string + '3, '

case  '4': 
output_string = output_string + '4, '

case  '5': 
output_string = output_string + '5, '

case  '6': 
output_string = output_string + '6, '

case  '7': 
output_string = output_string + '7, '

case  '8': 
output_string = output_string + '8, '

case  '9': 
output_string = output_string + '9, '

case  '10': 
output_string = output_string + '10, '

case  '11': 
output_string = output_string + '11, '

case  '12': 
output_string = output_string + '12, '

case  '13': 
output_string = output_string + '13, '

case  '14': 
output_string = output_string + '14, '

case  '15': 
output_string = output_string + '15'

alert('Числовой ряд: ' + output_string);

}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

let a = +prompt('Введите число.');
let b = +prompt('Введите число.');

function sum(a, b) {
let c = a + b;
return c;
} 


function minus(a, b) {
    let c = a - b;
    return c;
    } 
    

    function multiplication(a, b) {
        let c = a * b;
        return c;
        } 
        
    
        function division(a, b) {
            let c = a / b;
            return c;
            } 
            
        

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

let arg1 = +prompt('Введите число');
let arg2 = +prompt('Введите число');
let operation = prompt('Введите operation');
function mathOperation(arg1, arg2, operation) {

    switch(operation)    {
        case 'sum':
            return sum(arg1, arg2);
            break;

        case 'minus':
            return minus(arg1, arg2);
            break;

        case 'multiplication':
            return multiplication(arg1, arg2);
            break;

        case 'division':
            return division(arg1, arg2);
            break;
    }
}

alert(mathOperation(arg1,arg2,operation));

// 7. *Сравнить null и 0. Попробуйте объяснить результат.
// null >= 0; //true
if (null >= 0) {
    alert('null >= 0  - true');
}
if (null <= 0) {
    alert('null <= 0  - true');
}
if (null == 0) {
    alert('null == 0  - false');
}
if (null > 0) {
    alert('null >0  - false');
}
if (null < 0) {
    alert('null <0  - false');
}

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

let val = +prompt('Введите число');
let pow = +prompt('Введите степень');

function power(val, pow) {
    if (pow == 1) {
        return(val);
    } else {
        return(val * power (val, pow-1));
    }

}
alert(power(val,pow));