// D. Уравнение с корнем
// Условия задачи здесь: https://contest.yandex.ru/contest/27393/problems/D/

const calculate = (a, b, c) => {
    if (a === 0 || c < 0) {
        return c * c === b ? 'MANY SOLUTIONS' : 'NO SOLUTION';
    } else {
        return ((c * c - b) % a) !== 0 ? 'NO SOLUTION' : (c * c - b) / a;
    }
};

let res;
process.stdin.on('data', data => {
    const [a, b, c] = data.toString().trim().split('\n').map(num => Number(num));
    res = calculate(a, b, c)
    process.stdout.write(res.toString());
    process.exit();
});