/*
 * Concept: advanced / Generator function (two-way communication)
 * Run: node "11. advance/4. generator._1.js"
 *
 * CONCEPT: Values can be sent back into a running generator via .next(value).
 *   The value passed to .next() becomes the result of the yield expression
 *   inside the generator, enabling two-way communication between the caller
 *   and the generator on each step.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   The first .next() starts the generator and yields "vanila cup". The second
 *   .next({ scoop: true }) sends config back in — nextConfig receives that object.
 *   Subsequent yields use nextConfig.scoop to decide the serving format.
 */

function* iccreamVendingMachine() {
    const nextConfig = yield "vanila cup";
    yield nextConfig.scoop ? "pista scoop" : "pista cup";
    yield nextConfig.scoop ? "strawberry scoop" : "strawberry cup";
}

const icecreamGenerator = iccreamVendingMachine()

console.log(icecreamGenerator.next())
console.log(icecreamGenerator.next({ scoop: true }))
console.log(icecreamGenerator.next({ scoop: false }))
console.log(icecreamGenerator.next({ scoop: false }))
