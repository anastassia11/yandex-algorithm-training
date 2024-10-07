const minMaxCalc = (a, n) => {
    const min = n + (n - 1) * a;
    const max = n + (n + 1) * a;
    return [min, max];
}

const calculate = (a, b, n, m) => {
    const [min1, max1] = minMaxCalc(a, n);
    const [min2, max2] = minMaxCalc(b, m);
    const tmax = Math.min(max1, max2);
    const tmin = Math.max(min1, min2);
    if (tmin > tmax) return [-1];
    return [tmin, tmax];
};

let res;
process.stdin.on('data', data => {
    const [a, b, n, m] = data.toString().trim().split('\n').map(num => Number(num));
    res = calculate(a, b, n, m)
    process.stdout.write(res.join(' '));
    process.exit();
});