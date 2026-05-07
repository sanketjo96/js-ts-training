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
        if (argSet[key]) {
            console.log('hit')
            return argSet[key]
        } else {
            const taskPromise = fn(...args);
            argSet[key] = taskPromise
            return taskPromise
        }
    }
}

const memoisedFetchData = memoize(fetchData)

memoisedFetchData(1, 2).then(r => console.log(r))
memoisedFetchData(1, 2).then(r => console.log(r))
memoisedFetchData(2, 1).then(r => console.log(r))
