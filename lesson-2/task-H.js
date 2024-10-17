// H. Наибольшее произведение трех чисел
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/H/

const calculate = (arr) => {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (const num of arr) {
        if (num >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num >= max2 && num < max1) {
            max3 = max2;
            max2 = num;
        } else if (num > max3 && num < max2) {
            max3 = num;
        }

        if (num <= min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2 && num > min1) {
            min2 = num;
        }
    }

    const multipleMax = max1 * max2 * max3;
    const multipleMin = min1 * min2 * max1;

    return multipleMax > multipleMin ? [max1, max2, max3] : [min1, min2, max1];
}

let res;
process.stdin.on('data', data => {
    const arr = data.toString().trim().split(' ').map(Number);
    res = calculate(arr);
    process.stdout.write(res.join(' '));
    process.exit();
});