import TaskCollection, { foo } from './collections/TaskCollection.js';

new TaskCollection([
    'Go to the store',
    'Go to the gym',
    'Play Apex Legends',
]).dump();

console.log(foo);
