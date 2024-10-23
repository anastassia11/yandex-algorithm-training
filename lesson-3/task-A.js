// A. Количество различных чисел
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/A/

const calculate = (arr) => {
    const uniqArr = new Set([...arr]);
    return uniqArr.size;
};

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const arr = fileContent.toString().trim().split(' ');
const result = calculate(arr);

fs.writeFileSync("output.txt", result.toString());