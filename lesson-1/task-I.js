// I. Узник замка Иф
// Условия задачи здесь: https://contest.yandex.ru/contest/27393/problems/I/

const calculate = (A, B, C, D, E) => {
    if ((A <= D && B <= E) || (A <= E && B <= D)
        || (A <= D && C <= E) || (A <= E && C <= D)
        || (C <= D && B <= E) || (C <= E && B <= D)) return 'YES'
    return 'NO'
};

let res;
process.stdin.on('data', data => {
    const [A, B, C, D, E] = data.toString().trim().split('\n').map(num => Number(num));
    res = calculate(A, B, C, D, E)
    process.stdout.write(res);
    process.exit();
});