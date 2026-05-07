function Task(name, time = 1000, isPartyTime = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPartyTime === true) {
                resolve("Done: " + name)
            } else {
                reject("error in task " + name)
            }
        }, time)
    })
}

Promise.customAllSettled = function (promiseList) {
    const settledResult = []
    const rejectCount = 0

    let successCallback, failedCallback

    this.then = function (fn) {
        successCallback = fn
        return this
    }

    this.catch = function (fn) {
        failedCallback = fn
        return this
    }

    promiseList.forEach((promise, index) => {
        promise.then(result => {
            settledResult[index] = result
            if (settledResult.length === promiseList.length) successCallback(settledResult)
        }).catch(e => {
            settledResult[index] = e
            if (settledResult.length === promiseList.length) failedCallback(settledResult)
        })
    });
}

new Promise.customAllSettled([
    new Task('Order icecream from swiggy', 2000, false),
    new Task('Book a cab for guest', 500, false),
    new Task('Book a hall for party', 1000, false),
]).then(result => {
    console.log('All settled with atleast one success', result)
}).catch(e => {
    console.log('All errored', e)
});