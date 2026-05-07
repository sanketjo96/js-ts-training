// Implement memoize(fn) for an async function. If the same arguments are passed again, 
// return the cached result without calling fn again. Arguments are primitives.

function fetchData(...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('from real execution: ' + args.join('-'))
        }, 1000)
    })
}

function memoize(fn) {
    const argSet = {};

    return (...args) => {
        const key = args.join('-');
        return new Promise((resolve, reject) => {
            if (argSet[key]) {
                resolve('from cached: ' + argSet[key])
            } else {
                fn(...args).then((result) => {
                    argSet[key] = result
                    resolve(result)
                })
            }
        })
    }
}

const memoisedFetchData = memoize(fetchData)

memoisedFetchData(1, 2).then(r => console.log(r))
setTimeout(() => {
    memoisedFetchData(1, 2).then(r => console.log(r))
}, 1000)

setTimeout(() => {
    memoisedFetchData(2, 1).then(r => console.log(r))
}, 2000)


/*
Your setTimeout workaround manually delays the second call to ensure the cache is ready. 
But in real usage, two calls with the same args fired simultaneously both miss the cache and call fn twice. 
The robust fix is to cache the Promise itself, not the result.
*/
