/*
 * Concept: patterns / Factory
 * Run: node "9. patterns/4. factory.js"
 *
 * CONCEPT: The Factory pattern centralises object creation so callers do not
 *   need to know the class or construction details. The factory decides what
 *   to create based on the input it receives.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   IcecreamFactory.create() returns different product objects based on the type
 *   string. Passing an unknown type falls back to a vanilla default — no caller
 *   needs to handle construction logic themselves.
 */

class IcecreamFactory {
    create(type) {
        switch (type) {
            case 'mango':
                return { flavour: 'mango', price: 5 }
            case 'chocolate':
                return { flavour: 'chocolate', price: 6 }
            default:
                return { flavour: 'vanilla', price: 4 }
        }
    }
}

const factory = new IcecreamFactory()
console.log(factory.create('mango'))
console.log(factory.create('strawberry'))
