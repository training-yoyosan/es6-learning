'use strict';

// ES5
function applyDiscount(cost, discount) {


    discount = discount || 0.1;

    return cost - (cost * discount);
}

console.log('applyDiscount');
console.log(applyDiscount(100, 0.4));
console.log(applyDiscount(100));

// ES6 with default parameter value

function applyDiscount2(cost, discount = 0.1) {

    return cost - (cost * discount);
}

console.log('applyDiscount2');
console.log(applyDiscount2(100, 0.3));
console.log(applyDiscount2(100));

// ES6 with default function return value

function defaultDiscount() {
    return 0.1;
}

function applyDiscount3(cost, discount = defaultDiscount()) {
    return cost - (cost * discount);
}

console.log('applyDiscount3');
console.log(applyDiscount3(100, 0.5));
console.log(applyDiscount3(100));
