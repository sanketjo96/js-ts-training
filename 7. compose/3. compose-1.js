/**
 * const transform = compose(trim, toUpper, exclaim)
 * transform("hello")   // same result, readable left-to-right (or right-to-left)
 */

const trim = (word) => {
    return word.trim()
}

const toUpperCases = (word) => {
    return word.toUpperCase()
}

const exclaim = (word) => {
    return word + '!'
}

function compose(...fnList) {
    return (word) => fnList.reduceRight((acc, fn) => {
        return fn(acc)
    }, word)
}

const transform = compose(trim, toUpperCases, exclaim)
console.log(transform("hello"))