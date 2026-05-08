const data = [10, [1, 2], [10, [10, 30]]]

function Flatten(data) {
    const result = []
    for (let i of data) {
        if (i && Array.isArray(i)) {
            const flattened = Flatten(i)
            for (let j of flattened) result.push(j)
        } else {
             result.push(i)
        }
    }

    return result
}

Flatten(data);