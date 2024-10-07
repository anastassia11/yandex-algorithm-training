// C. Телефонные номера
// Условия задачи здесь: https://contest.yandex.ru/contest/27393/problems/C/

const calculate = (numbers) => {
    const isNum = (char) => {
        return char !== '('
            && char !== ')'
            && char !== '-'
            && char !== '+'
    }

    const normalizeNumber = (num) => {
        const normNum = [...num.toString()].filter(char => isNum(char)).join('');
        return normNum.length === 11 ? ('8' + normNum.slice(1))
            : ('8495' + normNum);
    }

    const etalon = normalizeNumber(numbers[0]);
    const answers = [];

    for (let i = 1; i <= 3; i++) {
        answers.push(normalizeNumber(numbers[0]) === normalizeNumber(numbers[i])
            ? 'YES' : 'NO')
    }
    return answers.join('\n')
};

let res;
process.stdin.on('data', data => {
    const numbers = data.toString().trim().split('\n');
    res = calculate(numbers)
    process.stdout.write(res.toString());
    process.exit();
});