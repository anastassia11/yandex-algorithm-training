const calculate = (A1, B1, A2, B2) => {
    const possibilities = [
        [Math.max(A1, A2), B1 + B2],
        [Math.max(A1, B2), B1 + A2],
        [Math.max(B1, A2), A1 + B2],
        [Math.max(B1, B2), A1 + A2],
    ];
    let minArea = Infinity;
    let bestSize = [];

    for (const [width, height] of possibilities) {
        const area = width * height;
        if (area < minArea) {
            minArea = area;
            bestSize = [width, height];
        }
    }
    return bestSize;
};

let res;
process.stdin.on('data', data => {
    const [A1, B1, A2, B2] = data.toString().split(' ').map(Number);
    res = calculate(A1, B1, A2, B2)
    process.stdout.write(res.join(' '));
    process.exit();
});