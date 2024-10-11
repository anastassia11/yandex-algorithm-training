// B. Определить вид последовательности
// Условия задачи здесь: https://contest.yandex.ru/contest/27472/problems/B/

// CONSTANT – последовательность состоит из одинаковых значений
// ASCENDING – последовательность является строго возрастающей
// WEAKLY ASCENDING – последовательность является нестрого возрастающей
// DESCENDING – последовательность является строго убывающей
// WEAKLY DESCENDING – последовательность является нестрого убывающей
// RANDOM – последовательность не принадлежит ни к одному из вышеупомянутых типов

const calculate = (arr) => {
    const index = arr.indexOf(-2000000000);
    arr = index !== -1 ? arr.slice(0, index) : arr;

    let isCONSTANT = true, isASCENDING = true, isWEAKLYASCENDING = true,
        isDESCENDING = true, isWEAKLYDESCENDING = true;

    if (arr.length > 1) {
        if (arr[0] > arr[arr.length - 1]) {
            isWEAKLYASCENDING = false;
        } else if (arr[0] < arr[arr.length - 1]) {
            isWEAKLYDESCENDING = false;
        }
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[0]) {
                isCONSTANT = false;
            }
            if (arr[i] > arr[i - 1]) {
                isWEAKLYDESCENDING = false;
            }
            if (arr[i] >= arr[i - 1]) {
                isDESCENDING = false;
            }
            if (arr[i] < arr[i - 1]) {
                isWEAKLYASCENDING = false;
            } if (arr[i] <= arr[i - 1]) {
                isASCENDING = false;
            }
        }
    } else {
        return 'RANDOM';
    }
    return isCONSTANT ? 'CONSTANT'
        : isASCENDING ? 'ASCENDING'
            : isDESCENDING ? 'DESCENDING'
                : isWEAKLYASCENDING ? 'WEAKLY ASCENDING'
                    : isWEAKLYDESCENDING ? 'WEAKLY DESCENDING'
                        : 'RANDOM';
};

let res;
process.stdin.on('data', data => {
    const arr = data.toString().trim().split('\n').map(num => Number(num));
    res = calculate(arr);
    process.stdout.write(res);
    process.exit();
});