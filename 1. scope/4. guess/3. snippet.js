/*
 * Concept: scope / output prediction — var leaks out of blocks, let does not
 * Run: node "1. scope/4. guess/3. snippet.js"
 *
 * CONCEPT: var ignores block boundaries and leaks into the enclosing scope.
 *   let is confined to the block it is declared in. Accessing let outside
 *   its block throws a ReferenceError.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — blockVar leaks out of the block and is accessible outside.
 *   ✓ GOOD — blockLet stays inside the block; typeof outside returns "undefined"
 *             (typeof avoids the ReferenceError that direct access would throw).
 */

{
  var blockVar = "leaks out";
  let blockLet = "stays in";
}

console.log("10:", blockVar);
console.log("11:", typeof blockLet);
