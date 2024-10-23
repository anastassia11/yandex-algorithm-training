// B. Пересечение множеств
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/B/

const calculate = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(x => set2.has(x)).sort();
};

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const [arr1, arr2] = fileContent.toString().trim().split('\n').map(arr => arr.trim().split(' ').map(Number));
const result = calculate(arr1, arr2);

fs.writeFileSync("output.txt", result.join(' '));