/*
 * Concept: advanced / Iterator protocol
 * Run: node "11. advance/2. iterator.js"
 *
 * CONCEPT: An object implements the iterator protocol by defining
 *   [Symbol.iterator]() that returns an object with a next() method.
 *   next() returns { value, done } on each call. Once this protocol is
 *   implemented, the object is compatible with for...of and spread syntax.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   icecream defines [Symbol.iterator], making it iterable in a for...of loop.
 *   Calling [Symbol.iterator]() manually returns an iterator whose next() can
 *   be stepped through explicitly to retrieve values one at a time.
 */

const icecream = {
    flavours: ["vanila", "mango", "strawberry"],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                return i < this.flavours.length
                    ? { value: this.flavours[i++], done: false }
                    : { value: undefined, done: true }
            }
        }
    }
}

for (const scoop of icecream) {
    console.log(scoop)
}

const icecreamCounter = icecream[Symbol.iterator]();
console.log(icecreamCounter.next())
