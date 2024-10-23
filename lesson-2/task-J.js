// J. Треугольник Максима
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/J/

const calculate = (n, frequencies) => {
    let left = 30;
    let right = 4000;

    for (let i = 1; i < frequencies.length; i++) {
        const [prev, now] = [Number(frequencies[i - 1][0]), Number(frequencies[i][0])];
        const sign = frequencies[i][1];
        const midPoint = (prev + now) / 2;
        if (sign === 'closer') {
            if (now > prev) {
                left = Math.max(left, midPoint)
            } else {
                right = Math.min(right, midPoint)
            }
        } else {
            if (now > prev) {
                right = Math.min(right, midPoint)
            } else {
                left = Math.max(left, midPoint)
            }
        }
    }
    return [left, right];
}

let res;
process.stdin.on('data', data => {
    const [n, ..._frequencies] = data.toString().trim().split('\n');
    const frequencies = _frequencies.map(freq => freq.trim().split(' '));
    res = calculate(n, frequencies);
    process.stdout.write(res.join(' '));
    process.exit();
});