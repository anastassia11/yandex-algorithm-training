// G. Наибольшее произведение двух чисел
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/G/

const calculate = (arr) => {
    if (arr.length === 2) {
        return arr.sort((a, b) => a - b);
    }
    let max1 = Math.min(arr[0], arr[1]), max2 = Math.max(arr[0], arr[1]);
    let min1 = max1, min2 = max2;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] >= max2) {
            max1 = max2;
            max2 = arr[i];
        } else if (arr[i] > max1) {
            max1 = arr[i];
        }
        if (arr[i] <= min1) {
            min2 = min1;
            min1 = arr[i];
        } else if (arr[i] < min2) {
            min2 = arr[i];
        }
    }
    return (min1 * min2 > max1 * max2) ? [min1, min2] : [max1, max2];
}

let res;
process.stdin.on('data', data => {
    const arr = data.toString().trim().split(' ').map(Number);
    res = calculate(arr);
    process.stdout.write(res.join(' '));
    process.exit();
});