/*
 * Concept: principles / solid / i — Interface Segregation Principle (ISP)
 * Run: node "10. principles/solid/4. i.js"
 *
 * CONCEPT:
 *   Clients should not be forced to depend on methods they don't use. A fat
 *   interface that bundles unrelated methods forces implementors to provide
 *   stubs for behaviour that doesn't apply to them.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — IcecreamWorkerBad requires both serve() and churn(). A Cashier
 *             must implement churn() even though cashiers don't churn icecream.
 *   ✓ GOOD — Servable and Churnable are separate roles. Cashier only takes
 *             Servable; IcecreamMaker takes both. No forced stubs.
 */

// ✗ BAD
class IcecreamWorkerBad {
    serve()  { throw new Error('Not implemented') }
    churn()  { throw new Error('Not implemented') }
}

class CashierBad extends IcecreamWorkerBad {
    serve()  { return 'Cashier serves icecream' }
    churn()  { throw new Error('Cashiers do not churn') }  // forced stub — ISP violation
}

// ✓ GOOD
class Servable {
    serve() { throw new Error('Not implemented') }
}

class Churnable {
    churn() { throw new Error('Not implemented') }
}

class Cashier extends Servable {
    serve() { return 'Cashier serves icecream' }  // only what a cashier does
}

class IcecreamMaker extends Servable {
    serve() { return 'Maker serves icecream' }
    churn() { return 'Maker churns icecream' }    // opts in to churn beyond what Servable requires
}

// ─── Usage ───────────────────────────────────────────────────────────────────
const cashier = new Cashier()
const maker   = new IcecreamMaker()

console.log(cashier.serve())  // Cashier serves icecream
console.log(maker.serve())    // Maker serves icecream
console.log(maker.churn())    // Maker churns icecream
