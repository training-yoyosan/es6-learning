class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        // multiple ways of using the Arrows
        this.tasks.forEach(task => console.log(task));

        this.tasks.forEach((task, index) => console.log(task, index));

        this.tasks.forEach(() => console.log('task', this));

        // for all of the above `this` keyword will always point to the TaskCollection object

        // for this situation, this will point to the Window object or undefined
        this.tasks.forEach(function(task) {
            console.log(task, this);
        });
    }
}

class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).log();
