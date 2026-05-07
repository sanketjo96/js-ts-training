/*
 * Concept: scope / output prediction — const mutation, IIFE scope
 * Run: node "1. scope/4. guess/4. snippets.js"
 *
 * CONCEPT: const prevents reassignment — attempting to mutate it throws a
 *   TypeError. An IIFE creates its own function scope, so variables declared
 *   inside are invisible from the outside. typeof on an out-of-scope variable
 *   returns "undefined" without throwing.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   Shadowing z inside the try block works; reassigning it throws TypeError
 *   (caught and printed). The outer z is unchanged at line 15.
 *   Inside the IIFE, secret is undefined (hoisted) before assignment, then
 *   "iife-secret" after. typeof secret outside the IIFE is "undefined".
 */

const z = "outer-const";

try {
  const z = "shadow-z";
  console.log("13:", z);
  z = "mutate";
} catch (e) {
  console.log("14:", e.constructor.name);
}

console.log("15:", z);

(function() {
  console.log("16:", typeof secret);
  var secret = "iife-secret";
  console.log("17:", secret);
})();

console.log("18:", typeof secret);
