// G. Детали
// Условия задачи здесь: https://contest.yandex.ru/contest/27393/problems/G/

const calculate = (N, K, M) => {
    if (!(N >= K && K >= M)) return 0;
    const balls = Math.floor(N / K);
    const details = balls * Math.floor(K / M);
    const remainder = N % K + balls * (K % M);
    if (remainder < K) {
        return details;
    } else {
        return details + calculate(remainder, K, M);
    }
};

let res;
process.stdin.on('data', data => {
    const [N, K, M] = data.toString().split(' ').map(Number);
    res = calculate(N, K, M)
    process.stdout.write(res.toString());
    process.exit();
});