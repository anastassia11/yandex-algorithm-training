// C. Ближайшее число
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/C/

const calculate = (X, arr, length) => {
    let ans = arr[0] || null;
    if (length <= 0) {
        return ans
    } else {
        let res = arr[0] - X;
        for (let i = 1; i < arr.length; i++) {
            if (Math.abs(arr[i] - X) < Math.abs(res)) {
                res = arr[i] - X;
                ans = arr[i];
            }
        }
    }
    return ans;
};

let res;
process.stdin.on('data', data => {
    const lines = data.toString().trim().split('\n');
    const length = Number(lines[0]);
    const X = Number(lines[2]);
    const arr = lines[1].split(' ').map(Number);
    res = calculate(X, arr, length);
    process.stdout.write(res.toString());
    process.exit();
});