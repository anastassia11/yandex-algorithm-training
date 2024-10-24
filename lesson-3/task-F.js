// F. Инопланетный геном
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/F/

const calculate = (genom1, genom2) => {
    let ans = 0;
    const genomSet2 = new Set();

    for (let i = 0; i < genom2.length - 1; i++) {
        genomSet2.add(genom2[i] + genom2[i + 1]);
    }
    for (let i = 0; i < genom1.length - 1; i++) {
        genomSet2.has(genom1[i] + genom1[i + 1]) && ans++;
    }
    return ans;
};

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const [genom1, genom2] = fileContent.toString().trim().split('\n').map(genom => genom.split(''));
const result = calculate(genom1, genom2);
fs.writeFileSync("output.txt", result.toString());