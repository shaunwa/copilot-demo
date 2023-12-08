/*
    A Person class with name, age, and hobbies properties,
    and a method that prints the person's data as a string.
*/
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    printData() {
        return `${this.name} is ${this.age} years old. ${this.name}'s hobbies are ${this.hobbies.join(', ')}.`;
    }
}

// Path: second-demo.js
/*
    A function that takes an array of numbers,
    and returns an object with the mean, median, mode,
    standard deviation, variance, and range of the numbers.
*/
function getStats(arr) {
    let stats = {};
    stats.mean = findMean(arr);
    stats.median = findMedian(arr);
    stats.mode = findMode(arr);
    stats.stdDev = findStdDev(arr);
    stats.variance = findVariance(arr);
    stats.range = findRange(arr);
    return stats;
}

function findMean(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

function findMedian(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let middleIndex = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
        return sortedArr[middleIndex];
    }
}

function findMode(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let modes = [];

    arr.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFrequency) {
            maxFrequency = frequency[num];
        }
    });

    for (let num in frequency) {
        if (frequency[num] === maxFrequency) {
            modes.push(Number(num));
        }
    }

    return modes;
}

function findStdDev(arr) {
    let mean = findMean(arr);
    let squaredDifferences = arr.map((num) => (num - mean) ** 2);
    let variance = findMean(squaredDifferences);
    return Math.sqrt(variance);
}

function findVariance(arr) {
    let mean = findMean(arr);
    let squaredDifferences = arr.map((num) => (num - mean) **

/*
        A function that calculates the mean, median, mode,
        standard deviation, variance, and range of a set of numbers.
*/
function getStats(arr) {
    let stats = {};
    stats.mean = findMean(arr);
    stats.median = findMedian(arr);
    stats.mode = findMode(arr);
    stats.stdDev = findStdDev(arr);
    stats.variance = findVariance(arr);
    stats.range = findRange(arr);
    return stats;
}

function findMean(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

function findMedian(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let middleIndex = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
        return sortedArr[middleIndex];
    }
}

function findMode(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let modes = [];

    arr.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFrequency) {
            maxFrequency = frequency[num];
        }
    });

    for (let num in frequency) {
        if (frequency[num] === maxFrequency) {
            modes.push(Number(num));
        }
    }

    return modes;
}

function findStdDev(arr) {
    let mean = findMean(arr);
    let squaredDifferences = arr.map((num) => (num - mean) ** 2);
    let variance = findMean(squaredDifferences);
    return Math.sqrt(variance);
}

function findVariance(arr) {
    let mean = findMean(arr);
    let squaredDifferences = arr.map((num) => (num - mean) ** 2);
    return findMean(squaredDifferences);
}

function findRange(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;
}

function getStats(arr) {
  let stats = {};
  stats.mean = findMean(arr);
  stats.median = findMedian(arr);
  stats.mode = findMode(arr);
  stats.stdDev = findStdDev(arr);
  stats.variance = findVariance(arr);
  stats.range = findRange(arr);
  return stats;
}

/**
 * Counts the occurrences of each element in an array.
 * @param {Array} array - The input array.
 * @returns {Object} - An object containing the count of each element.
 */
function countOccurrences(array) {
    let occurrences = {};
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        occurrences[element] = (occurrences[element] || 0) + 1;
    }
    return occurrences;
}

module.exports = {
    Person,
    getStats,
    countOccurrences,
}