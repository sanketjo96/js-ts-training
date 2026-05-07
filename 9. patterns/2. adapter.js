/*
 * Concept: patterns / Adapter
 * Run: node "9. patterns/2. adapter.js"
 *
 * CONCEPT: The Adapter pattern wraps an incompatible interface so it fits the
 *   interface the rest of the system expects, without changing either side.
 *   The adapter translates between the two, acting as a bridge.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   LegacyIcecreamVendor returns { flavour, size, cost }. IcecreamAdapter
 *   translates it to { name, price, size } so callers work with the expected
 *   shape without knowing anything about the legacy format.
 */

class LegacyIcecreamVendor {
    buyIcecream() {
        return { flavour: 'mango', size: 'medium', cost: 5 }
    }
}

class IcecreamAdapter {
    constructor(vendor) {
        this.vendor = vendor
    }

    getProduct() {
        const item = this.vendor.buyIcecream()
        return {
            name: item.flavour,
            price: item.cost,
            size: item.size
        }
    }
}

const vendor = new LegacyIcecreamVendor()
const adapter = new IcecreamAdapter(vendor)
console.log(adapter.getProduct())
