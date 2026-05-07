const icecream = {
    flavour: "vanila",
    price: 200
}

function ShopCall(serviceTax, gst) {
    return this.price + gst + serviceTax
}

function ShopApply(serviceTax, gst) {
    return this.price + gst + serviceTax
}

function ShopBind(serviceTax, gst) {
    return this.price + gst + serviceTax
}




console.log(ShopCall.call(icecream, 10, 100))
console.log(ShopApply.apply(icecream, [100, 10]))


const handler = ShopBind.bind(icecream, 100, 20)
console.log(handler(10)) // partial application