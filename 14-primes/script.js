/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

//можете не проверять
/*
function primes(num) {
    const number = [];
    //const result = [];
    for (let i = 2; i <= num; i++) {
        number.push(i);
    }
    console.log(number);
     
    const result = number.filter(function (item) {
        for (let i = 2; i < item; i++) {
            return item % i === 0;
        }
    });


        //if ((number[i] > 1 && number[i] < 4) || ((number[i] % 2 !== 0) && (number[i] % 3 !== 0))) {
        //        b.push(number[i]);
        //}
    //}

    //return num = result;

    //формула рабочая. я просто не знаю кому возвращать правильный ответ
    //number.forEach(function (item) {
    //    if (item > 3 && ((item % 2 === 0) || (item % 3 === 0)))  {
    //        
    //    } else {
    //        b.push();  здесю
    //    }
    //});
} */

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
//console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
//console.log(primes(25)); // [2, 3, 5, 7, 11, 13, 17]