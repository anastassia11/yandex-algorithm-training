// E. Скорая помощь
// Условия задачи здесь: https://contest.yandex.ru/contest/27393/problems/E/

const calculate = (K1, M, K2, P2, N2) => {
    let Q = 0.1;
    const Qapprox = (K2 - 1) / ((P2 - 1) * M + N2 - 1);
    if (Number.isInteger(Qapprox)) {
        Q = Qapprox;
    } else {
        let n = 1;
        while (!Number.isInteger(Q)) {
            Q = (K2 - n - 1) / ((P2 - 1) * M + N2 - 1);
            n++;
        }
    }
    const P1 = Math.ceil(K1 / (M * Q));
    const N1 = Math.ceil((K1 - (P1 - 1) * Q * M) / Q);
    return [P1, N1].join(' ');
};

let res;
process.stdin.on('data', data => {
    const [K1, M, K2, P2, N2] = data.toString().split(' ').map(Number);
    res = calculate(K1, M, K2, P2, N2)
    process.stdout.write(res.toString());
    process.exit();
});