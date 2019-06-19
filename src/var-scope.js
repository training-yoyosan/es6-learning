function test(bool) {
    if (bool) {
        var foo = 'test'; // hoisting means the variable declaration
                        // is put at the start of the function

        // foo = 'test'; // foo will become a global variable
        // let/const foo = 'test'; // foo will only be visible in the if block
            // and not in the else or function block

        console.log(foo);
    } else {
        console.log(foo); // foo isn't accessible if let or const are used
    }
}

test(true);
test(false);
console.log(foo); // foo is available when it isn't declared using a scope

/**
 * Jeffrey uses:
 *
 * - let, by default, for all variables
 * - const only when reassignment is not needed
 * - var not at all. Maybe only at the top level, for some variables that need to be global.
 */
