/* 1. Задать температуру в градусах по Цельсию.  
Вывести в alert соответствующую температуру в 
градусах по Фаренгейту. Подсказка: 
расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, 
где Tf – температура по Фаренгейту, Tc – температура 
 по Цельсию

 */
let Tc = prompt("Введите температуру по Цельсию?");
let Tf = (9 / 5) * Tc + 32;
alert(Tf);

/* 2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку ""Василий""; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»). */

let name = "Василий";
let admin = name;
alert(admin);

// 3. *Чему будет равно JS-выражение 1000 + "108"

let a = 1000;
let b ="108";
alert(a+b);