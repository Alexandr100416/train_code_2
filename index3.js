"use strict"
const formatString = function (string) {
    const changeStrArr = string.split("");
    if (changeStrArr.length <= 40) {
        return string;
    } else if (changeStrArr.length > 40) {
        return string.slice(0, 40) + "..."
    }
};


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
