// In ES5
// Declaring a class

function User(username, email) {
    this.username = username;
    this.email = email;

    // DO NOT DO: The function will be redeclared and redefined
    // for each new User object.
    // this.changeEmail = function() {}
}

User.prototype.changeEmail = function(newEmail) {
    this.email = newEmail;
};

var user = new User('Gigi Pană', 'gigi@pana.ro');
user.changeEmail('test@test.com');
console.dir('ES5', user);

// In ES 6
// Declaring a class also called syntactic sugar!
class User2 {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    // Behind the scenes, this is added to the User2 prototype
    changeEmail(newEmail) {
        this.email = newEmail;
    }

    // A static method in ES6
    // Can only be called using `User2.register` and
    // not `this.register`.
    // static register(username, email) {
    static register(...args) {
        // return new User2(username, email);
        return new User2(...args);
    }

    // accessor can be used for computed properties
    get display() {
        return `Username '${this.username}' has the e-mail address '${this.email}'.`;
    }

    // setter
    set name(newName) {
        this.username = newName;
    }
}

// let user2 = new User2('Gigi Pană', 'gigi@pana.ro');
let user2 = User2.register('Gigi Pană', 'gigi@pana.ro');
user2.changeEmail('test2@test.com');

console.dir('ES6', user2);
console.dir(user2.display);
user2.name = 'Gigi Pană Junior';
console.dir(user2.display);

// Classes are first class citizens, meaning that
// they can be passed around pretty much anywhere.

function log(strategy) {
    return strategy.handle();
}

console.log('ES6 first class citizen example');
console.log(
    log(new class {
        handle() {
            return '\tLogging through alerts!';
        }
    })
);

class ConsoleLogger {
    handle() {
        return '\tLogging through console!';
    }
}

console.log(log(new ConsoleLogger()));
