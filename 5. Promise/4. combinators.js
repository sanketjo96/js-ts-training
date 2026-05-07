/*
 * Concept: async / Promise combinators
 * Run: node "5. Promise/4. combinators.js"
 *
 * CONCEPT: Promise combinators run multiple promises in parallel and aggregate results.
 *   - Promise.all       — resolves when all resolve; rejects on the first failure.
 *   - Promise.allSettled — waits for all to settle; always resolves with all outcomes.
 *   - Promise.race      — resolves or rejects with whichever promise settles first.
 *   - Promise.any       — resolves with the first success; rejects only if all fail.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   Uncomment one combinator block at a time. Promise.all is active by default —
 *   one failing task causes the entire batch to reject immediately.
 */

function Task(name, time = 1000, isPartyTime = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPartyTime === true) {
                resolve("Done: " + name)
            } else {
                reject("error in task " + name)
            }
        }, time)
    })
}

// Promise.all — all must resolve; one failure rejects the whole batch
Promise.all([
    Task("find icecream shop"),
    Task("find food to order", 1000, false),
    Task("find party place")
]).then((result) => {
    console.log("Result for .all")
    console.log(result)
}).catch(e => console.log(e))


// Promise.allSettled — waits for all; returns both fulfilled and rejected outcomes
// Promise.allSettled([
//     Task("find icecream from zomato", 1000, false),
//     Task("find icecream from swiggy", 200),
//     Task("find icecream from local vendor", 500, false)
// ]).then((result) => {
//     console.log("Result for .allSettled")
//     console.log(result)
// }).catch(e => console.log(e))


// Promise.race — returns the first to settle (success or failure)
// Promise.race([
//     Task("find icecream from zomato", 1000, true),
//     Task("find icecream from swiggy", 1000, false),
//     Task("find icecream from local vendor", 1000, false)
// ]).then((result) => {
//     console.log("Result for .race")
//     console.log(result)
// }).catch(e => {
//     console.log("error for .race")
//     console.log(e)
// })


// Promise.any — returns the first success; rejects only if every promise fails
// Promise.any([
//     Task("find icecream from zomato", 1000, false),
//     Task("find icecream from swiggy", 200, false),
//     Task("find icecream from local vendor", 500, false)
// ]).then((result) => {
//     console.log("Result for .any")
//     console.log(result)
// }).catch(e => console.log(e))
