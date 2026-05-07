/*
 * Concept: OOP / prototypal inheritance (pre-ES6)
 * Run: node "8. oops/old/1. inheritance.js"
 *
 * CONCEPT: Before ES6 classes, inheritance was done manually via prototype chains.
 *   The child constructor calls the parent with .call(this) to copy own properties.
 *   Object.create links the child's prototype to the parent's prototype. The
 *   constructor reference must then be restored manually.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ConeIcecream inherits from Icecream via Object.create. Methods on
 *   Icecream.prototype are reachable through the chain. toText() is overridden
 *   on ConeIcecream.prototype. category is shared via Icecream.prototype.
 */

function Icecream(flavour, freezingPoint) {
    this.flavour = flavour
    this.freezingPoint = freezingPoint
}

Icecream.prototype.category = "dessert"
Icecream.prototype.getFlavour = function () {
    return this.flavour
}

Icecream.prototype.getFreezingPoint = function () {
    return this.freezingPoint
}

Icecream.prototype.toText = function () {
    return "I am icecream"
}

function ConeIcecream(flavour, freezingPoint, scoop, type) {
    Icecream.call(this, flavour, freezingPoint)
    this.scoop = scoop
    this.type = type
}

ConeIcecream.prototype = Object.create(Icecream.prototype)
ConeIcecream.prototype.constructor = ConeIcecream

ConeIcecream.prototype.getScoop = function () {
    return this.scoop
}

ConeIcecream.prototype.getType = function () {
    return this.type
}

ConeIcecream.prototype.toText = function () {
    return "I am cone icecream"
}

const mangoIcecreamCone = new ConeIcecream("mango", "4dc", "single", "normal cone")
console.log(mangoIcecreamCone)
console.log(typeof mangoIcecreamCone)
console.log(mangoIcecreamCone instanceof ConeIcecream)
console.log(mangoIcecreamCone.getFlavour())  // inherited from Icecream.prototype
console.log(mangoIcecreamCone.toText())      // overridden on ConeIcecream.prototype
console.log(mangoIcecreamCone.category)      // shared via Icecream.prototype
