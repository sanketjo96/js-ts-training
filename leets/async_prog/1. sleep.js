// #1
// Implement a sleep(ms) function that returns a Promise which resolves after the 
// given number of milliseconds. Do not use any external libraries.

// Input: sleep(100)
// Output: Resolves after 100ms


function sleep(timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, timer)
    }) 
}

sleep(1000).then(data => console.log('resolved', data))