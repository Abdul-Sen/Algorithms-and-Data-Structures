let result = null;

// Q - Is string a palindrome
function isPalindrome(word) {
    word = [...word];

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

/**
 * binary search algorthem for searching through a sorted array in a recursive manner.
 * @param {array} array - the sorted array to search through
 * @param {Number} val - the value we want to search.
 * @param {Number} prefix - Carries the prefixes from previous arrays (since we are cutting down array) to be added to the final index.
 */
function binarySearchRecursive(sortedArray, val, prefix = 0) {
    let midIndex = Math.floor((sortedArray.length / 2));
    let newArray = null;

    if (sortedArray[midIndex] === val) {
        return prefix + midIndex;
    }
    else if (val < sortedArray[midIndex]) {
        newArray = sortedArray.slice(0, midIndex);
    }
    else if (val > sortedArray[midIndex]) {
        newArray = sortedArray.slice(midIndex);
        prefix += midIndex;
    }

    return binarySearch(newArray, val, prefix);
}


/**
 * non-recursive implimentation of binary search.
 * @param {array} array - the sorted array to search through
 * @param {Number} val - the item/number we want to search.
 */
function BinarySearchIterative(array, val) {
    let min = 0;
    let max = array.length - 1;
    let guessIndex = null;

    while (min < max) {
        guessIndex = Math.floor((min + max) / 2);

        if (array[guessIndex] === val) {
            return guessIndex;
        }

        if (array[guessIndex] < val) {
            min = guessIndex + 1;
        }
        if (array[guessIndex] > val) {
            max = guessIndex - 1;
        }
    }
    return -1;
}

/**
 * recursive implimentation of quicksort using middle pivot.
 * @param {array} array - the unsorted array
 */
function quicksortRecursive(array) {

    // base condition
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }

    left = quicksort(left);
    right = quicksort(right);

    return [...left, pivot, ...right]; // joniing left, middle and right array
};


// TODO recursive fibinnaci
/**
 * Q - Return all fibiinaci numbers upto and including the given number
 * @returns Array [] of Fibonacci numbers
 */
function computeFibonacciIterative(lastFib)
{

    fibList = [];
    done = false;

    if(lastFib === 0)
    {
        return lastFib;
    }
    else{
        fibList.push(0);
        fibList.push(1);
    }

    while(!done)
    {
        if(fibList[fibList.length -1] === lastFib)
        {
            done = true;
        }
        else{
            fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
        }
    }
    return fibList;
}

/**
 * Q - Return all fibiinaci numbers upto and including the given number in a recursive manner
 * @returns Array [] of Fibonacci sequence
 */
function computeFibonacciRecursive(n)
{
    if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {
      let seq = computeFibonacciRecursive(n - 1);
      seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
      return seq;
    }
}

// TODO longest word

// TODO Max Diff

