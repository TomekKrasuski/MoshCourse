const array = [0, null, undefined, '', 5, 7, null, 2, 3, 4];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (const truthy of array) {
        if (truthy) {
            count++
        }
    }
    return count;
}