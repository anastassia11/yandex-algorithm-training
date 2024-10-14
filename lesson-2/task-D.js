// D. Больше своих соседей
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/D/

const calculate = (arr) => {
    let res = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1]))
            res++;
    }
    return res;
};

let res;
process.stdin.on('data', data => {
    const arr = data.toString().trim().split(' ').map(Number);
    res = calculate(arr);
    process.stdout.write(res.toString());
    process.exit();
});