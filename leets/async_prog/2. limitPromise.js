// #2
// Given a function fn that returns a Promise and a time limit t (ms), implement timeLimit(fn, t). Calling the returned 
// function should reject with 'Time Limit Exceeded' if fn's promise doesn't resolve within t 

// Input: fn resolves in 50ms, t = 100
// Output: Resolves normally
// Input: fn resolves in 200ms, t = 100
// Output: Rejects with "Time Limit Exceeded"

const longFn = (isReject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isReject) {
                reject('Failed function execution')
            }
            resolve('Done running long fn', isReject)
        }, 1000)
    })
}


function timeLimit(fn, t) {
    const rejectionTimerPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Timeout will not run function now')
        }, t)
    })

    return async (data) => {
        return Promise.race([fn(data), rejectionTimerPromise])
    }
}

const timedPromise = timeLimit(longFn, 2000)
timedPromise(false).then(data => console.log(data)).catch(e => console.log(e))