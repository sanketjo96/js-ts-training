/*
 * Concept: scope / output prediction — var re-declaration and let/const
 * Run: node "1. scope/4. guess/1. snippet.js"
 *
 * CONCEPT: var can be re-declared in the same scope without error and simply
 *   takes the new value. let and const cannot be re-declared in the same scope —
 *   attempting to do so throws a SyntaxError at parse time.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   x is re-declared with var and takes the new value "re-declared-var".
 *   y and z (let/const) are declared once; re-declaring them would throw.
 */

var x = "global";
let y = "outer-let";
const z = "outer-const";

console.log("1:", x, y, z);

var x = "re-declared-var";
console.log("2:", x);
