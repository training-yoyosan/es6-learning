// object shorthand

function getPerson() {
    let name = 'John';
    let age = 25;

    // ES5 version
/*    return {
        name: name,
        age: age,
    };*/

    // ES6 version
    return { name, age };
}

console.log('Object shorthand');
console.log(
`
Name: ${getPerson().name}
Age: ${getPerson().age}
`.trim()
);

// short method syntax

function getPerson2() {
    let name = 'John';
    let age = 25;

    // ES5 version
/*    return {
        name: name,
        age: age,
    };*/

    // ES6 version
    return {
        name,
        age,
        // ES5
        greet: function() {
            return 'ES5: Hello ' + this.name + '!';
        },
        greet2() {
            return `ES6: Hello ${this.name}!`;
        }
    };
}

console.log('Short method');
console.log(` ${getPerson2().greet()}`);
console.log(` ${getPerson2().greet2()}`);

// object destructuring

let person = {
    name: 'Karen',
    age: 32,
    sex: 'f',
    hair: 'black',
};
// ES5
/*
let name = person.name;
let age = person.age;
*/
// ES6
let { name, age } = person;

function greet({ name, age }) {
    return `Hello ${name}! Happy ${age} years!`;
}

console.log('Object destructuring');
console.log(`${name} is ${age} years old.`);
console.log('ES6 function call:', greet(person));
