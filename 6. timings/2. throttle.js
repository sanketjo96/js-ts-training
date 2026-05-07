/*
 * Concept: timings / throttle
 * Run: node "6. timings/2. throttle.js"
 *
 * CONCEPT: Throttle limits a function to at most one execution per time interval.
 *   Unlike debounce, it fires immediately on the first call and then silences
 *   all subsequent calls until the interval has elapsed.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   Five rapid calls are fired — only the first executes because the remaining
 *   four fall within the 100ms window. After the interval elapses, the first
 *   call in the next batch fires again.
 */

function makeThrottled(fn, delay) {
    let lastCallTime = 0
    return function (...args) {
        const currentCallTime = Date.now()
        if (currentCallTime - lastCallTime > delay) {
            lastCallTime = currentCallTime
            fn(...args)
        }
    }
}

const throttledLog = makeThrottled((msg) => {
    console.log(`${Date.now()} ${msg}`)
}, 100)

throttledLog("Call 1")
throttledLog("Call 2")
throttledLog("Call 3")
throttledLog("Call 4")
throttledLog("Call 5")

setTimeout(() => {
    throttledLog("Call 7")
    throttledLog("Call 8")
    throttledLog("Call 9")
    throttledLog("Call 10")
}, 100)
