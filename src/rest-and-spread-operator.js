// in this example, it translates any
// sequence of arguments into an array
function sum(...nums) {
    return nums.reduce((prev, cur) => prev + cur);
}

console.log('Rest operator example');
console.log(sum(1, 2, 3));

function sum2(x, y) {
    return x + y;
}

let nums = [1, 2];
console.log('Spread operator example');
// It splits an array into parameters
console.log(sum2(...nums));
