class TaskCollection {

    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

export let foo = 'bar';
export default TaskCollection;
