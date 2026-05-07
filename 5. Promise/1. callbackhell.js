/*
 * Concept: async / callback hell
 * Run: node "5. Promise/1. callbackhell.js"
 *
 * CONCEPT: Callback hell (pyramid of doom) occurs when sequential async tasks
 *   are nested inside each other's callbacks. Each level of nesting adds
 *   indentation and makes error handling and readability progressively worse.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — Three sequential tasks nest three levels deep. Adding a fourth
 *             step or handling errors anywhere requires editing inside the
 *             innermost callback and manually propagating errors outward.
 */

function Task(name, callback) {
    setTimeout(() => {
        callback("Completed: " + name)
    }, 1000)
}

console.log('Start party')

Task("find icecream shop", (output) => {
    console.log(output)
    Task("Place an order", (output) => {
        console.log(output)
        Task("Pay the bill", (output) => {
            console.log(output)
        })
    })
})
