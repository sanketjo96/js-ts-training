/*
 * Concept: array / polyfill — Array.prototype.forEach
 * Run: node "2. array/polyfills/3.forEach.js"
 *
 * CONCEPT: Array.forEach iterates over each element and invokes the callback
 *   with (element, index, array). It always returns undefined and never mutates
 *   the original array. It supports an optional thisArg like map.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   newForEach is implemented on Array.prototype. The demo logs each element
 *   with its index, then confirms the original array is unchanged after iteration.
 */

Array.prototype.newForEach = function (callback, thisArg) {
    if (!callback) {
        throw new TypeError("Callback function is missing.")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Callback should be of type function.")
    }

    for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this)
    }
};

const data = [1, 2, 3]
data.newForEach((value, index, array) => {
    console.log(`index=${index}, value=${value}, original array=[${array}]`)
})

console.log("Original data remains unchanged:", data)
