/*
 * Concept: async / Promise basics
 * Run: node "5. Promise/2. promise.js"
 *
 * CONCEPT: A Promise represents a value that will be available in the future.
 *   It settles as either resolved (success) or rejected (failure). Handlers
 *   are attached with .then (success), .catch (failure), and .finally (always).
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   A Promise wraps a setTimeout. isSummer=false triggers the reject path.
 *   .catch handles the rejection and .finally always runs after either outcome.
 */

let isSummer = false
console.log("start")

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSummer === true) {
            resolve("Find the icecream shop")
        } else {
            reject("Shop not found")
        }
    }, 1000)
})

promise.then(() => {
    console.log("Task done")
}).catch(() => {
    console.log("Icecream for summer only!!")
}).finally(() => {
    console.log("end")
})
