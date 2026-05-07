/*
 * Concept: async / polyfill — Promise
 * Run: node "5. Promise/polyfills/1. promise.js"
 *
 * CONCEPT: A Promise wraps an executor and defers callbacks registered via
 *   .then/.catch until the executor calls resolve or reject. If the promise
 *   already settled before .then/.catch is registered, the callback fires
 *   immediately using the stored value.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   godPromise implements the core Promise contract from scratch. Calling
 *   reject("data") stores the value and fires the .catch handler. Swapping to
 *   resolve would fire the .then handler instead.
 */

function godPromise(executor) {
    let isResolved = false
    let isRejected = false
    let resolveCallback
    let rejectCallback
    let resolvedValue
    let rejectedValue

    function Resolve(value) {
        isResolved = true
        if (typeof resolveCallback === 'function') {
            resolveCallback(value)
        } else {
            resolvedValue = value
        }
    }

    function Reject(value) {
        isRejected = true
        if (typeof rejectCallback === 'function') {
            rejectCallback(value)
        } else {
            rejectedValue = value
        }
    }

    this.then = function (callback) {
        if (isResolved) {
            callback(resolvedValue)
        } else {
            resolveCallback = callback
        }
        return this
    }

    this.catch = function (callback) {
        if (isRejected) {
            callback(rejectedValue)
        } else {
            rejectCallback = callback
        }
        return this
    }

    executor(Resolve, Reject)
}

const promise = new godPromise((resolve, reject) => {
    reject("data")
})

promise.then((data) => {
    console.log("Success", data)
}).catch((e) => {
    console.log("Error", e)
})
