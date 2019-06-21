// basic generator example
function* numbers() {
    console.log('Begin');

    yield 1;
    yield 2;
    yield 3;
}

let iterator = numbers();
console.dir(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// a more complex example
function* range(start, end) {
    while (start <= end) {
        yield start++;
    }
}

// iteration versions

// Using for ... of
for (let number of range(1, 3)) console.log(number);

// Using the spread operator
console.log([...range(1, 15)]);

function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(...range(1, 3)));

// Using destructuring assignment
let x, y, z, t;
[x, y, z, t] = [...range(5, 8)];
console.log(x, y, z, t);

