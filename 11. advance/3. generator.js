/*
 * Concept: advanced / Generator function (basics)
 * Run: node "11. advance/3. generator.js"
 *
 * CONCEPT: A generator function (function*) pauses at each yield and resumes
 *   on the next .next() call. It returns a lazy iterator — values are produced
 *   on demand rather than all at once, making it useful for streaming or
 *   large sequence generation.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   iccreamVendingMachine yields three flavours one at a time. Each .next()
 *   call resumes the generator and returns { value, done } for the next yield.
 */

function* iccreamVendingMachine() {
    yield "vanila";
    yield "pista";
    yield "strawberry";
}

const icecreamGenerator = iccreamVendingMachine()

console.log(icecreamGenerator.next())
console.log(icecreamGenerator.next())
console.log(icecreamGenerator.next())
