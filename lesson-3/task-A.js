// A. Количество различных чисел
// Условия задачи здесь: https://contest.yandex.ru/contest/27663/problems/A/

const calculate = (arr) => {
    const uniqArr = new Set(arr.map(num => Number(num.replace(',', '.'))).filter(num => !isNaN(num)));
    return uniqArr.size;
};

let res;
process.stdin.on('data', data => {
    const arr = data.toString().trim().split(' ').filter(item => item !== '');
    res = calculate(arr);
    process.stdout.write(res.toString());
    process.exit();
});