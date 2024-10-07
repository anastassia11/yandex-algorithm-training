// B. Треугольник
// Условия задачи здесь: https://contest.yandex.ru/contest/27393/problems/B/

const calculate = (a, b, c) => {
    return ((a + b > c) && (a + c > b) && (b + c > a)) ? 'YES' : 'NO'
};

let res;
process.stdin.on('data', data => {
    const [a, b, c] = data.toString().trim().split('\n').map(num => Number(num));
    res = calculate(a, b, c)
    process.stdout.write(res.toString());
    process.exit();
});