/*
 * Concept: functions / compose (right-to-left)
 * Run: node "7. compose/1. compose.js"
 *
 * CONCEPT: Compose applies a sequence of functions from right to left. The
 *   rightmost function receives the initial value, and each result is passed
 *   as input to the next function to the left.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   compose(addFive, subtractTwo, multiplyByFour)(5) runs:
 *   multiplyByFour(5) → 20, subtractTwo(20) → 18, addFive(18) → 23.
 */

function addFive(num) {
    return num + 5;
}

function multiplyByFour(num) {
    return num * 4;
}

function subtractTwo(num) {
    return num - 2;
}

function compose(...fns) {
    return (val) => fns.reduceRight((acc, fn) => fn(acc), val)
}

const result = compose(addFive, subtractTwo, multiplyByFour)(5);
console.log(result);
