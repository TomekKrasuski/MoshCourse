const numbers = [1,-2,3,-4,5];

let sum =0;
numbers.every(value => sum += value)
console.log(sum)

console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0)); // inicjalizacją acc (0 na końcu)
// console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue));