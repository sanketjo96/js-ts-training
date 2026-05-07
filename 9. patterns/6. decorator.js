/*
 * Concept: patterns / Decorator
 * Run: node "9. patterns/6. decorator.js"
 *
 * CONCEPT: The Decorator pattern adds behaviour to an object dynamically without
 *   subclassing. The decorated object keeps its original interface — callers do
 *   not know a decorator is in place.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   withLogging wraps any service in a Proxy. Every method call is logged before
 *   and after execution. The underlying getUser() still runs and returns normally.
 */

const userService = {
    name: 'userService',
    getUser: function (id) {
        return `sanket-${id}`
    }
}

function withLogging(baseService) {
    return new Proxy(baseService, {
        get(target, prop) {
            const original = target[prop]
            if (typeof original !== 'function') return original

            return (args) => {
                console.log(`[Log] started calling ${target.name} ${args}`)
                const result = original.call(baseService, args)
                console.log(`[Log] done calling ${target.name} ${args}`)
                return result;
            }
        }
    })
}

const usrservice = withLogging(userService)
console.log(usrservice.getUser('123'))
