// D. Количество слов в тексте
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/D/

const calculate = (text) => {
    const uniqArr = new Set(text.flat());
    return uniqArr.size;
};

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const text = fileContent.toString().replace(/\r/gi, ' ').replace(/\n/gi, ' ').split(' ').filter(str => str.length);
const result = calculate(text);

fs.writeFileSync("output.txt", result.toString());