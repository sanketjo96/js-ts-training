/*
 * Concept: OOP / class-based inheritance (ES6+)
 * Run: node "8. oops/new/1. inheritance.js"
 *
 * CONCEPT: ES6 classes provide syntactic sugar over prototype-based inheritance.
 *   extends sets up the prototype chain. super() must be called in the child
 *   constructor before accessing this. Child classes can override parent methods
 *   and add static properties accessible on the class itself.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ConeIcecream extends Icecream. getFlavour() is inherited from the parent.
 *   toText() is overridden in the child. The static category is accessed directly
 *   on the ConeIcecream class, not on instances.
 */

class Icecream {
    constructor(flavour, freezingPoint) {
        this.flavour = flavour
        this.freezingPoint = freezingPoint
    }

    getFreezingPoint() {
        return this.freezingPoint
    }

    getFlavour() {
        return this.flavour
    }

    toText() {
        return "I am icecream"
    }
}

class ConeIcecream extends Icecream {
    static category = "dessert"

    constructor(flavour, freezingPoint, scoop, type) {
        super(flavour, freezingPoint)
        this.scoop = scoop
        this.type = type
    }

    getScoop() {
        return this.scoop
    }

    getType() {
        return this.type
    }

    toText() {
        return "I am cone icecream"
    }
}

const mangoIcecreamCone = new ConeIcecream("mango", "4dc", "single", "normal cone")
console.log(mangoIcecreamCone)
console.log(typeof mangoIcecreamCone)
console.log(mangoIcecreamCone instanceof ConeIcecream)

console.log(mangoIcecreamCone.getFlavour())  // inherited from base class
console.log(mangoIcecreamCone.toText())      // child overrides base method
console.log(ConeIcecream.category)           // static — on the class, not the instance
