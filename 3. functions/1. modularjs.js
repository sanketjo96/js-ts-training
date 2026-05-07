/*
 * Concept: functions / module pattern (IIFE)
 * Run: node "3. functions/1. modularjs.js"
 *
 * CONCEPT: An IIFE (Immediately Invoked Function Expression) creates a private
 *   scope. Only what is explicitly returned is accessible from outside — everything
 *   else stays hidden, simulating module-level encapsulation without a bundler.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — mix and temp are private variables; they cannot be read or mutated
 *             from outside the IIFE at all.
 *   ✓ GOOD — getFlavours and getMenu are the only exported methods via the
 *             returned object. Internal state is fully encapsulated.
 */

const icecreamShop = (() => {
    const mix = 'sMix'
    const temp = '2dc'
    let pulps = ['straberry', 'vanila', 'guva', 'mango']

    return {
        getFlavours: function () {
            return pulps
        },
        getMenu: function () {
            return pulps.map(item => ({ [item]: 100 }))
        }
    }
})();

console.log(icecreamShop.getFlavours())
console.log(icecreamShop.getMenu())
