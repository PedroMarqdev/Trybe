// 1- Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
    const newArray = arrays.reduce((current, next) => {
        next.forEach((key) => current.push(key))
        return current
    }, [])
    return newArray
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
