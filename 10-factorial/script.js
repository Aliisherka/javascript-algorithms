/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    const number = [];
    for (let i = 1; i <= n; i++) {
        number.push(i);
    }

    if (n === 0) {
        return 1;
    } else {
    const product = number.reduce(function (previousValue, item) {
        return previousValue * item;
    });
    return product;
    }
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720