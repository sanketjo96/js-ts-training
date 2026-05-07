/*
 * Concept: advanced / WeakMap
 * Run: node "11. advance/6. weak_map_set.js"
 *
 * CONCEPT: WeakMap holds weak references to its object keys. When the only
 *   remaining reference to a key is the WeakMap entry, the key and its associated
 *   value become eligible for garbage collection. WeakMap has no .size, no
 *   iteration, and only accepts objects as keys — it exists purely for
 *   memory-safe metadata storage attached to object lifetimes.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   falooda is set as a WeakMap key. After falooda = null, the object has no
 *   strong references left and can be garbage-collected. String keys are rejected
 *   (commented out) — they throw a TypeError.
 */

const icecreamMenu = new WeakMap()
let falooda = {
    base: { "flavour": 'vanila', "type": "scoop", "price": "200" },
    top: "cake",
    price: 400
}

// icecreamMenu.set('vanila', { ... }) — throws TypeError; keys must be objects
icecreamMenu.set(falooda, falooda)

// .size is not available — WeakMap does not know when GC will trigger
console.log(icecreamMenu.get(falooda))

falooda = null
