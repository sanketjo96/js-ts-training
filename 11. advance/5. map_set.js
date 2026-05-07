/*
 * Concept: advanced / Map and Set
 * Run: node "11. advance/5. map_set.js"
 *
 * CONCEPT: Map is like an object but keys can be of any type — including object
 *   references. Set is a list that stores only unique values; duplicates are
 *   silently ignored. Both maintain insertion order and provide a .size property.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   Map stores a string key and an object reference as a key. Set deduplicates
 *   the cocktail list on construction. Note: a regular Map holds a strong reference
 *   to its object keys — setting falooda = null does not free the object from memory
 *   because the Map still holds an internal reference to it.
 */

const icecreamMenu = new Map()
let falooda = {
    base: { "flavour": 'vanila', "type": "scoop", "price": "200" },
    top: "cake",
    price: 400
}

icecreamMenu.set('vanila', { "flavour": 'vanila', "type": "scoop", "price": "200" })
icecreamMenu.set('mango', { "flavour": 'mango', "type": "cup", "price": "200" })
icecreamMenu.set(falooda, falooda)

console.log(icecreamMenu.size)
console.log(icecreamMenu.get("mango"))
console.log(icecreamMenu.get(falooda))

falooda = null

const cocktailList = ["lemon", "orange", "orange", "lemon", "mango"]
const cocktailSet = new Set(cocktailList)

console.log(cocktailSet)
console.log(cocktailSet.add("lemon"))
console.log(cocktailSet.add("strawberry"))
console.log(cocktailSet.has("lemon"))
cocktailSet.forEach((value) => {
    console.log(value);
});
