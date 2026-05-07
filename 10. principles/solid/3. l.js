/*
 * Concept: principles / solid / l — Liskov Substitution Principle (LSP)
 * Run: node "10. principles/solid/3. l.js"
 *
 * CONCEPT:
 *   A subclass must be substitutable for its parent without breaking the
 *   program. A child class can extend behaviour, but must never break the
 *   contract the parent promises.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — SoftServeBad extends Icecream but throws on scoop() because soft
 *             serve can't be scooped. Any caller treating it as an Icecream breaks.
 *   ✓ GOOD — SoftServe extends a base that only promises serve(). ScoopableIcecream
 *             adds scoop() for types that support it. Every subtype is safe to
 *             substitute for its parent.
 */

// ✗ BAD
class IcecreamBad {
    scoop() { return 'Scooping icecream' }
}

class SoftServeBad extends IcecreamBad {
    scoop() { throw new Error('Soft serve cannot be scooped') }  // violates LSP
}

// ✓ GOOD
class Icecream {
    serve() { return 'Serving icecream' }
}

class ScoopableIcecream extends Icecream {
    scoop() { return 'Scooping icecream' }
}

class SoftServe extends Icecream {
    // only promises serve() — no broken contract
}

// ─── Usage ───────────────────────────────────────────────────────────────────
function serveToCustomer(icecream) {
    console.log(icecream.serve())
}

serveToCustomer(new ScoopableIcecream())  // Serving icecream
serveToCustomer(new SoftServe())          // Serving icecream
console.log(new ScoopableIcecream().scoop())  // Scooping icecream
