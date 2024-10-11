// A. Возрастает ли список?
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/A/

const calculate = (arr) => {
    let ans = arr.length > 0 ? 'YES' : 'NO';
    if (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1]) {
                ans = 'NO';
            }
        }
    }
    return ans;
};

let res;
process.stdin.on('data', data => {
    const arr = data.toString().trim().split(' ');
    res = calculate(arr)
    process.stdout.write(res);
    process.exit();
});