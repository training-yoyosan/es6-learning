// For an array of colors, that contain duplicates,
let colors = ['blue', 'black', 'red', 'green', 'yellow', 'black', 'yellow', 'red'];
// you can use the Set class to make it contain unique elements:
let colorsSet  = new Set(colors);

console.log(colorsSet);

// To filter colors that start with b
// and make it a set again, use:
console.log(
    new Set([...colorsSet].filter(color => color.startsWith('b')))
);

// See more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections
