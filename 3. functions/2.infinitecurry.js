/*
 * Concept: functions / infinite currying
 * Run: node "3. functions/2.infinitecurry.js"
 *
 * CONCEPT: Currying converts a multi-argument function into a sequence of
 *   single-argument functions. Infinite currying allows an arbitrary number
 *   of chained calls — the chain terminates when called with no arguments,
 *   at which point the accumulated value is returned.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   sum(1)(2)(3)(4)() accumulates the total via recursive closure. Each call
 *   with a number returns a new function; calling with no argument returns the sum.
 */

function sum(a) {
    if (typeof a !== 'number') {
        throw TypeError('Parameter should strictly be a number')
    }

    return function () {
        if (arguments.length) {
            const b = arguments[0]
            if (typeof b !== 'number') {
                throw TypeError('Parameter should strictly be a number')
            }
            return sum(a + b)
        }
        return a
    }
}

console.log(sum(1)(2)(3)(4)())
