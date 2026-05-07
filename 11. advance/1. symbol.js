/*
 * Concept: advanced / Symbol
 * Run: node "11. advance/1. symbol.js"
 *
 * CONCEPT: Symbol is a primitive type that guarantees uniqueness — two Symbols
 *   created with the same description are never equal. Symbols used as property
 *   keys are hidden from Object.keys(), Object.values(), and JSON serialization.
 *   They are the only way to add truly private-ish keys to an object.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   icecream has a Symbol key [id]. Object.keys() and Object.values() skip it.
 *   The only way to read the value is through the original symbol reference.
 */

const id = Symbol('icecream id')

const icecream = {
    'flavour': 'Orange',
    'price': 200,
    [id]: "123456789"
}

console.log(Object.keys(icecream))
console.log(Object.values(icecream))

console.log(icecream[id])
