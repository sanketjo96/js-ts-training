/*
 * Concept: scope / hoisting
 * Run: node "1. scope/2. hoisting.js"
 *
 * CONCEPT: var declarations are hoisted to the top of their function scope and
 *   initialized as undefined before any code runs. The assignment stays in place.
 *   let/const are also hoisted but remain uninitialized (temporal dead zone) —
 *   accessing them before declaration throws a ReferenceError.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — hoistingExample() logs undefined before the assignment because
 *             the var declaration was hoisted but the value was not.
 *   ✓ GOOD — noHoistingExample() (commented out) shows let — no hoisting surprise.
 */

function hoistingExample() {
    console.log("Initial flavour:", flavour)
    var flavour = "strawberry"
    console.log("Final flavour:", flavour)
}

function noHoistingExample() {
    let flavour = "strawberry"
    console.log("No hoisting with let:", flavour)
}

hoistingExample()
// noHoistingExample()
