/*
 * Concept: patterns / Singleton
 * Run: node "9. patterns/3. singleton.js"
 *
 * CONCEPT: The Singleton pattern ensures a class has only one instance across
 *   the entire program. All callers receive the same object regardless of how
 *   many times they request an instance.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   IcecreamShop.getInstance() creates one instance on the first call and returns
 *   the same instance on every subsequent call. store1 and store2 are the same
 *   object — store2.name is "Shop A" even though "Shop B" was passed.
 */

class IcecreamShop {
    constructor(name) {
        this.name = name
    }

    static getInstance(name) {
        if (!IcecreamShop.instance) {
            IcecreamShop.instance = new IcecreamShop(name)
        }
        return IcecreamShop.instance
    }
}

const store1 = IcecreamShop.getInstance('Shop A')
const store2 = IcecreamShop.getInstance('Shop B')
console.log(store1 === store2)
console.log(store2.name)
