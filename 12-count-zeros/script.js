/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
    let sum = 0
    for (let i = 1; i <= n; i++){
        `${i}`.split('').forEach( function (element) {
           if( element.includes('0')){
            sum +=1
           }
        });
    }
    return sum



    //const number = [];
    //const sum = 0;
    //for (let i = 1; i <= n; i++) {
    //    number.push(i + '');
    //}
    //console.log(number);

    //const b = number.filter(function(item) {
    //    return item.includes('0');
    //});
    //console.log(b);

    //for (let i = 0; i < b.length; i++) {
    //    sum +=1;
    //}
    //console.log(sum)
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
