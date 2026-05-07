/*
 * Concept: timings / debounce
 * Run: node "6. timings/1. debounce.js"
 *
 * CONCEPT: Debounce delays a function call until after a quiet period has passed.
 *   Every new invocation resets the timer. The function only fires once the caller
 *   has stopped triggering it for the full delay duration.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   Five rapid calls are fired in sequence — the timer resets on each. Only
 *   "call 5" executes after the 600ms quiet period. "call 6" fires after a
 *   deliberate 600ms pause because the quiet period elapsed again.
 */

function makeDebounced(fn, delay) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const debouncedLog = makeDebounced((msg) => {
    console.log(msg)
}, 600)

console.log("Firing 5 rapid calls...")
debouncedLog("call 1")
debouncedLog("call 2")
debouncedLog("call 3")
debouncedLog("call 4")
debouncedLog("call 5")

setTimeout(() => {
    console.log("Firing after a pause (600ms later)...")
    debouncedLog("call 6")
}, 600)
