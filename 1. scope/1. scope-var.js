/*
 * Concept: scope / var
 * Run: node "1. scope/1. scope-var.js"
 *
 * CONCEPT: var is function-scoped, not block-scoped. Declaring var inside an
 *   if-block does not create a new variable — it overwrites the enclosing
 *   function's variable.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — var inside the if-block silently overwrites the function-level
 *             flavour, so "pista" replaces "straberry" without any indication.
 *   ✓ GOOD — The global flavour stays "mango" because icecream() has its own
 *             function scope — var cannot leak across function boundaries.
 */

flavour = "mango"

function icecream() {
    var flavour = "straberry"
    console.log("Functional scope: " + flavour)
    if (1) {
        var flavour = "pista"
        console.log("Functional scope: " + flavour)
    }
}

icecream()
console.log("Global Scope: " + flavour)
