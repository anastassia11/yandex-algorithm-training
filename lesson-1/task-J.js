// J. Система линейных уравнений - 2
// Условия задачи здесь: https://contest.yandex.ru/contest/27393/problems/J/

const calculate = (a, b, c, d, e, f) => {
    const delta = a * d - b * c;
    const deltaX = e * d - b * f;
    const deltaY = a * f - c * e;

    if (delta === 0) {
        if (a === 0 && b === 0 && c === 0 && d === 0 && e === 0 && f === 0) {
            return [5];
        } else if (a === 0 && b === 0 && e !== 0) {
            return [0];
        } else if (c === 0 && d === 0 && f !== 0) {
            return [0];
        } else if (deltaX === 0) {
            if (a === 0 && c === 0) {
                return [4, b == 0 ? f / d : e / b];
            } else if (b === 0 && d === 0) {
                return deltaY === 0 ? [3, a == 0 ? f / c : e / a] : [0];
            } else {
                return d === 0 ? [1, -a / b, e / b] : [1, -c / d, f / d];
            }
        } else {
            return [0];
        }
    } else {
        return [2, (deltaX / delta), (deltaY / delta)];
    }
};

let res;
process.stdin.on('data', data => {
    const [a, b, c, d, e, f] = data.toString().trim().split('\n').map(num => Number(num));
    res = calculate(a, b, c, d, e, f);
    process.stdout.write(res.join(' '));
    process.exit();
});