// F. Симметричная последовательность
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/F/

const calculate = (n, arr) => {
    const defSymmetry = (arr) => {
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[arr.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    if (defSymmetry(arr)) {
        return '0';
    }

    for (let iter = 0; iter < n; iter++) {
        const arrToAppend = [...arr.slice(0, iter + 1).reverse()];
        const newArr = [...arr, ...arrToAppend];
        if (defSymmetry(newArr)) {
            return [iter + 1, arrToAppend.join(' ')].join('\n');
        }
    }
};

let res;
process.stdin.on('data', data => {
    const [_n, _arr] = data.toString().trim().split('\n');
    const n = Number(_n);
    const arr = _arr.split(' ').map(Number);
    const res = calculate(n, arr);
    process.stdout.write(res.toString());
    process.exit();
});