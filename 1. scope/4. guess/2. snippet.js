/*
 * Concept: scope / output prediction — hoisting inside a function
 * Run: node "1. scope/4. guess/2. snippet.js"
 *
 * CONCEPT: var declarations inside a function are hoisted to the top of that
 *   function and initialized as undefined before any code in the function runs.
 *   The assignment of the actual value stays at the original line.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   console.log before the var assignment prints undefined, not a ReferenceError,
 *   because the declaration was hoisted. The second log prints "strawberry".
 */

function icecream() {
    console.log("Initial flavour:", flavour)
    var flavour = "strawberry"
    console.log("Final flavour:", flavour)
}

icecream()
