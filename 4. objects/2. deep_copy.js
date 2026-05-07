/*
 * Concept: objects / shallow vs deep copy
 * Run: node "4. objects/2. deep_copy.js"
 *
 * CONCEPT: A shallow copy duplicates only top-level properties — nested objects
 *   and arrays are still shared between the original and the copy. A deep copy
 *   duplicates the entire structure so mutations on the copy never affect the original.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — Object.assign creates a shallow copy; pushing to shallowCopy.servings
 *             mutates the original iceCream.servings as well (same reference).
 *   ✓ GOOD — JSON.parse/JSON.stringify creates a deep copy; mutations on
 *             deepCopy.servings leave the original iceCream.servings untouched.
 */

const iceCream = {
    taste: 'bitter',
    expiry: 60,
    servings: ["scoop", "cone"]
}

// ✗ BAD — shallow copy shares nested array
const shallowCopy = Object.assign({}, iceCream)
shallowCopy.taste = "sweet"
shallowCopy.servings.push("waffle")
console.log("After shallow copy mutation, original servings:", iceCream.servings)

// ✓ GOOD — deep copy isolates nested array
const deepCopy = JSON.parse(JSON.stringify(iceCream))
deepCopy.taste = "sweet"
deepCopy.servings.push("waffle")
console.log("Original servings remain unchanged with deep copy:", iceCream.servings)
