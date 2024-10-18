// I. Сапер
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/I/

const calculate = (conf, coords) => {
    const [rows, cols] = conf;
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    for (const [a, b] of coords) {
        matrix[a - 1][b - 1] = '*';
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '*') {
                for (const [di, dj] of directions) {
                    const newRow = i + di;
                    const newCol = j + dj;
                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && matrix[newRow][newCol] !== '*') {
                        matrix[newRow][newCol]++;
                    }
                }
            }
        }
    }

    return matrix;
}

let res;
process.stdin.on('data', data => {
    const [firstLine, ...remainingLines] = data.toString().trim().split('\n');
    const conf = firstLine.trim().split(' ').map(Number);
    const coords = remainingLines.map(coord => coord.trim().split(' ').map(Number));
    res = calculate(conf, coords);
    process.stdout.write(res.map(row => row.join(' ')).join('\n'));
    process.exit();
});