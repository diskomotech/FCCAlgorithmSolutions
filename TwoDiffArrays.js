// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
let newArr = [];

let first = arr1.filter(function(i) {
if (arr2.indexOf(i) == -1) {
newArr.push(i);
}
});

let second = arr2.filter(function(j) {
if (arr1.indexOf(j) == -1) {
newArr.push(j);
}
});

return newrr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);