// A. Кондиционер
// Условия задачи здесь: https://contest.yandex.ru/contest/27393/problems/A/

const calculate = ({ troom, tcond, mode }) => {
    switch (mode) {
        case 'freeze':
            return troom > tcond ? tcond : troom;
        case 'heat':
            return tcond > troom ? tcond : troom;
        case 'auto':
            return tcond;
        case 'fan':
            return troom
    }
};

let res;
process.stdin.on('data', data => {
    const lines = data.toString().trim().split('\n');
    const [troom, tcond] = lines[0].split(' ').map(num => Number(num));
    const mode = lines[1];
    res = calculate({ troom, tcond, mode })
    process.stdout.write(res.toString());
    process.exit();
});