/*
 * Concept: array / polyfill — Array.prototype.map
 * Run: node "2. array/polyfills/1. map.js"
 *
 * CONCEPT: Array.map transforms each element via a callback and returns a new
 *   array of the same length. It passes (element, index, array) to the callback
 *   and supports an optional thisArg to set the callback's this context.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   newMap is implemented from scratch on Array.prototype. Two test cases run:
 *   basic length transformation, and thisArg binding via a calc object where
 *   this.factor is multiplied against each element's length.
 */

Array.prototype.newMap = function (callback, thisArg) {
    if (!callback) {
        throw new TypeError("Callback function is missing.")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Callback should be of type function.")
    }

    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback.call(thisArg, this[i], i, this))
    }
    return result;
};

const icecream = ['choco-chips', 'vanila', 'strawberry']

// 1. Basic transformation
const typeLen = icecream.newMap((item) => item.length)
console.log(typeLen);

// 2. thisArg binding
const calc = { factor: 10 }
const results = icecream.newMap(function (item) {
    return item.length * this.factor
}, calc)
console.log(results);
