/*
 * Concept: functions / pipe (left-to-right)
 * Run: node "7. compose/2. pipe.js"
 *
 * CONCEPT: Pipe applies a sequence of functions from left to right. The
 *   leftmost function receives the initial value, and each result is passed
 *   as input to the next function to the right. It is the mirror of compose.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   pipe(addFive, subtractTwo, multiplyByFour)(5) runs:
 *   addFive(5) → 10, subtractTwo(10) → 8, multiplyByFour(8) → 32.
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

function pipe(...fns) {
    return (val) => fns.reduce((acc, fn) => fn(acc), val)
}

const result = pipe(addFive, subtractTwo, multiplyByFour)(5);
console.log(result);
