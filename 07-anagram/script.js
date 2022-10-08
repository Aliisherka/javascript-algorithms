/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    str1 = str1.toLowerCase().split("").sort();

    str2 = str2.toLowerCase().split("").sort();

    if (str1.length !== str2.length) {
            return false;
        } else { 
            for (let i = 0; i < str1.length; i++) {
                if (str1[i] !== str2[i]) {
                    return false;
                } else {
                    return true;
                }
            }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); // false