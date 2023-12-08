function findMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log('Welcome to the first demo of the day!')

function findMedian(arr) {
    let sortedArr = arr.slice(0).sort((a, b) => a - b)
    let mid = Math.floor(sortedArr.length / 2)
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[mid] + sortedArr[mid - 1]) / 2
    } else {
        return sortedArr[mid]
    }
}

function findMode(arr) {
    let mode = {}
    let max = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (mode[arr[i]]) {
            mode[arr[i]]++
        } else {
            mode[arr[i]] = 1
        }
        if (mode[arr[i]] > count) {
            max = arr[i]
            count = mode[arr[i]]
        }
    }
    return max
}

function findMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
}

const numbers = getNRandomNumbers(10);
console.log(numbers);

console.log(findMedian(numbers));
console.log(numbers);

function getNRandomNumbers(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}

module.exports = {
    findMean,
    findMedian,
    findMode,
    findMax,
    getNRandomNumbers
}