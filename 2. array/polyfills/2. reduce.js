/*
 * Concept: array / polyfill — Array.prototype.reduce
 * Run: node "2. array/polyfills/2. reduce.js"
 *
 * CONCEPT: Array.reduce folds an array into a single accumulated value using a
 *   callback. If an initial value is provided it is used as the first accumulator;
 *   otherwise the first element is the accumulator and iteration starts at index 1.
 *   Calling reduce on an empty array without an initial value throws a TypeError.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   newReduce handles both the initial-value and no-initial-value cases, guards
 *   against the empty-array edge case, and sums a number array starting from 100.
 */

Array.prototype.newReduce = function (callback, acc) {
    if (!callback) {
        throw new TypeError("Callback function is missing.")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Callback should be of type function.")
    }

    if (this.length === 0 && arguments.length === 1) {
        throw new TypeError("Reduce of empty array with no initial value")
    }

    let result = acc
    let startIndex = 0
    if (arguments.length === 1) {
        result = this[0]
        startIndex = 1
    }

    for (let i = startIndex; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

const icecreamRate = [10, 20, 30, 40]
const total = icecreamRate.newReduce((acc, item) => acc + item, 100)
console.log(total)
