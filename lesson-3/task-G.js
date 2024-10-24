// G. Черепахи
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/G/

const calculate = (n, turtles) => {
    const trueTurtles = new Set();
    for (let i = 0; i < turtles.length; i++) {
        const [a, b] = turtles[i];
        a >= 0 && b >= 0 &&
            (a + b == n - 1) &&
            trueTurtles.add(a);
    }
    return trueTurtles.size;
};

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const [n, ...turtles] = fileContent.toString().trim().split('\n').map((turtle, idx) => idx > 0 ? turtle.split(' ').map(Number) : Number(turtle));
const result = calculate(n, turtles);
fs.writeFileSync("output.txt", result.toString());