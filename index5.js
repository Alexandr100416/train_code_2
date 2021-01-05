"use strict"

const numbers = [];
let total = 0;
let input;
let update;
const findNumbers = function(){
    do {
        input = prompt("Введите число");
        update =  Number(input);
        if(!isNaN(update)){
            numbers.push(update);
        }if (isNaN(update)){
    alert("Ошибка введение даных")
        }
    } while (
        input !== null&&!isNaN(update)
    );
}
findNumbers();

const sum = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// test
console.log(sum(numbers));


