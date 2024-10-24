// H. Злые свинки
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/H/

const calculate = (n, coords) => {
    const shots = new Set();
    for (let i = 0; i < coords.length; i++) {
        const [x, y] = coords[i];
        shots.add(x);
    }
    return shots.size;
};

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const [n, ...coords] = fileContent.toString().trim().split('\n').map((coord, idx) => idx > 0 ? coord.split(' ').map(Number) : Number(coord));
const result = calculate(n, coords);
fs.writeFileSync("output.txt", result.toString());