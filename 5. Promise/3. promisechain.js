/*
 * Concept: async / Promise chaining
 * Run: node "5. Promise/3. promisechain.js"
 *
 * CONCEPT: Promise chaining replaces nested callbacks with a flat sequence of
 *   .then calls. Each .then receives the resolved value of the previous step
 *   and can return a new Promise to continue the chain. A single .catch at the
 *   end handles any failure in the chain.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✓ GOOD — Three sequential tasks are chained with .then instead of nesting.
 *             The code reads top-to-bottom and a single .catch covers all errors.
 */

function Task(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done: " + name)
        }, 1000)
    })
}

console.log('Start party')

Task("find icecream shop").then((output) => {
    console.log(output)
    return Task("Place an order");
}).then((output) => {
    console.log(output)
    return Task("Pay the bill")
}).then((output) => {
    console.log(output)
}).catch(e => console.log(e))
    .finally(() => console.log("done!!"))
