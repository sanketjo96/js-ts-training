const icecream = {
    flavour: "vanila",
    price: 200
}

function Shop(serviceTax = 20, gst = 10) {
    return this.price + gst + serviceTax
}


Function.prototype.customBind = function (self, ...args) {
    return (...callerArgs) => {
        const propName = Symbol()
        self[propName] = this;
        const result = self[propName](...args, ...callerArgs)
        delete self[propName]
        return result
    }

}


const handler = Shop.customBind(icecream, 100);
console.log(handler(10))