function test(bool) {
    if (bool) {
        let foo = 'test'; // hoisting means the variable declaration
                        // is put at the start of the function

        // let/const foo = 'test'; // foo will only be visible in the if block
            // and not in the else or function block

        console.log(foo);
    } else {
        console.log(foo);
    }

    console.log(foo);
}

test(true);
test(false);
