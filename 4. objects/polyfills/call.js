const icecream = {
    flavour: "vanila",
    price: 200
}

function Shop(serviceTax = 20, gst = 10) {
    return this.price + gst + serviceTax
}


Function.prototype.customCall = function (self, ...args) {
    const propName = Symbol()
    self[propName] = this;
    const result = self[propName](...args)
    delete self[propName]
    return result
}

console.log(Shop.customCall(icecream))