// C. Кубики
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/C/

const calculate = (counts, arr) => {
    const set1 = new Set(arr.slice(0, counts[0]));
    const set2 = new Set(arr.slice(counts[0], arr.length));
    let interSect = [...set1].filter(x => set2.has(x)).sort((a, b) => a - b);
    let rem1 = [...set1].filter(x => !set2.has(x)).sort((a, b) => a - b);
    let rem2 = [...set2].filter(x => !set1.has(x)).sort((a, b) => a - b);
    return [interSect.length, interSect, rem1.length, rem1, rem2.length, rem2]
};

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const [counts, ...arr] = fileContent.toString().trim().split('\n').map((item, idx) => idx === 0 ? item.trim().split(' ').map(Number) : Number(item));
const result = calculate(counts, arr);

fs.writeFileSync("output.txt", result.map(item => Array.isArray(item) ? item.join(' ') : item.toString()).join('\n'));