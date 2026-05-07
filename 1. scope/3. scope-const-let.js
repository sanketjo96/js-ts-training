/*
 * Concept: scope / const and let
 * Run: node "1. scope/3. scope-const-let.js"
 *
 * CONCEPT: let and const are block-scoped. Each block { } creates a new binding,
 *   so a let inside an if-block is a completely separate variable from one with
 *   the same name in the enclosing function.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✓ GOOD — let inside the if-block prints "pista" but the outer let still holds
 *             "mango". No mutation of the outer variable occurred.
 */

function blockScopeExample() {
    let flavour = "mango"

    if (true) {
        let flavour = "pista"
        console.log("Inside block:", flavour)
    }

    console.log("Outside block:", flavour)
}

blockScopeExample()
