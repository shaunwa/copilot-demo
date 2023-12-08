const assert = require('assert');
const { countOccurrences } = require('./second-demo');

// Test case 1: Array with no elements
assert.deepStrictEqual(countOccurrences([]), {});

// Test case 2: Array with one element
assert.deepStrictEqual(countOccurrences([1]), { 1: 1 });

// Test case 3: Array with multiple elements, all unique
assert.deepStrictEqual(countOccurrences([1, 2, 3]), { 1: 1, 2: 1, 3: 1 });

// Test case 4: Array with multiple elements, some duplicates
assert.deepStrictEqual(countOccurrences([1, 2, 2, 3, 3, 3]), { 1: 1, 2: 2, 3: 3 });

// Test case 5: Array with multiple elements, all duplicates
assert.deepStrictEqual(countOccurrences([1, 1, 1, 1]), { 1: 4 });

console.log('All test cases passed!');