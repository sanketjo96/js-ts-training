/*
 * Concept: patterns / Proxy
 * Run: node "9. patterns/5. proxy.js"
 *
 * CONCEPT: The Proxy pattern intercepts access to an object and lets you add
 *   custom behaviour — validation, logging, access control — without changing
 *   the target object itself.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   A Proxy wraps the icecream object. The get trap intercepts property reads
 *   and returns "****" for the recipe property. All other properties pass through
 *   to the target unchanged.
 */

const icecream = { name: "choco chip", recipe: 'something big...', price: 200 }

const actualIcecream = new Proxy(icecream, {
    get(target, prop) {
        if (prop === 'recipe') return "*****"
        return target[prop]
    }
})

console.log(actualIcecream.name)
console.log(actualIcecream.recipe)
