/*
 * Concept: objects / this binding
 * Run: node "4. objects/3. thisBinding.js"
 *
 * CONCEPT: this refers to the object that called the function, not where the
 *   function was defined. Constructor calls bind this to the new instance.
 *   Method calls on an object bind this to that object. Detaching a method
 *   and calling it as a plain function loses the binding.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — lostGetName is detached from icecreamObj. Called as a plain function,
 *             this is undefined (strict mode) or global, so it returns undefined.
 *   ✓ GOOD — icecreamObj.getName() retains the correct this binding to icecreamObj.
 */

function Person(name) {
    this.name = name
}

const person = new Person('sanket')
console.log("Constructor call binds this to the new instance:", person.name)

const icecreamObj = {
    name: 'vanilla',
    getName() {
        return this.name
    }
}

console.log("Method call binds this to the object:", icecreamObj.getName())

const lostGetName = icecreamObj.getName
console.log("Detached method loses this context:", lostGetName())
