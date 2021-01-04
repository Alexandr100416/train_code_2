"use strict"
const findLongestWord = function (string) {
    const arr = string.split(" ");
    let max = 0;
    let longesWord;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            longesWord = arr[i];
        }
    }
    return longesWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));