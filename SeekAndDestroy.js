// Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {

    let target = Array.prototype.slice.call(arguments, 0, 1);
    console.log(target);
    
    let toDestroy = Array.prototype.slice.call(arguments, 1);
    console.log(toDestroy);
    
    return target.reduce(function(a, b) {
    return a.concat(b);
    })
    .filter(function(i) {
    return toDestroy.indexOf(i) == -1;
    });
    }
    
    destroyer([1, 2, 3, 1, 2, 3], 2, 3);