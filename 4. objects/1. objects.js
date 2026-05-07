/*
 * Concept: objects / reference assignment and default parameters
 * Run: node "4. objects/1. objects.js"
 *
 * CONCEPT: Objects are passed and assigned by reference. Mutating through any
 *   reference affects all references to the same object. Default function
 *   parameters are evaluated fresh on each call — they do not close over the
 *   value the argument had at definition time.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — otherIcecream and iceCream point to the same object; mutating
 *             otherIcecream.taste also changes iceCream.taste.
 *   ✓ GOOD — The default parameter spreads a fresh copy with expiry 20, so
 *             tasteIcecream() without arguments always evaluates the default fresh.
 */

const iceCream = {
    taste: 'bitter',
    expiry: 60
}

let otherIcecream = iceCream
otherIcecream.taste = "sweet"

console.log("Original object after shallow assignment:", iceCream)

function tasteIcecream(value = { ...iceCream, expiry: 20 }) {
    if (value.expiry === 60) {
        return "Throw"
    }
    return "Investigate"
}

console.log("Testing...", tasteIcecream())
console.log("Testing (original object)...", tasteIcecream(iceCream))
