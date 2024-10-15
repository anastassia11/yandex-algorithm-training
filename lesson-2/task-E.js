// E. Чемпионат по метанию коровьих лепешек
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/E/

const calculate = (n, arr) => {
    let maxPlace = 0;
    const sortedArr = [...arr];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (sortedArr[j] < sortedArr[j + 1]) {
                const _tmp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = _tmp;
            }
        }
    }

    for (let i = 1; i < n - 1; i++) {
        if (arr[i].toString().endsWith('5') && (arr.indexOf(Math.max(...arr)) < i) && (arr[i] > arr[i + 1])) {
            if (maxPlace < sortedArr.indexOf(arr[i]) + 1) {
                maxPlace = sortedArr.indexOf(arr[i]) + 1;
            }
        }
    }
    return maxPlace;
};

let res;
process.stdin.on('data', data => {
    const [_n, _arr] = data.toString().trim().split('\n');
    const n = Number(_n);
    const arr = _arr.split(' ').map(Number);
    res = calculate(n, arr);
    process.stdout.write(res.toString());
    process.exit();
});