// E. OpenCalculator
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/E/

const calculate = (options, number) => {
    let ans = 0;
    const numberSet = new Set(number);
    numberSet.forEach(num => !options.includes(num) && ans++);
    return ans;
};

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.toString().trim().split('\n');
const options = lines[0].split(' ').map(Number);
const number = lines[1].split('').map(Number)
const result = calculate(options, number);
fs.writeFileSync("output.txt", result.toString());