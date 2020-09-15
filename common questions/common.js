let result = null;

/**
 * Name - Palindrome
 * Q - validate a given string to check if string is palindrome i.e "civic" is palindrome, "ciivic" is not
 * @param {string} word string to check for palindrome
 * @returns {boolean} true/false
 */
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
function binarySearchIterative(array, val) {
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
 * Name - quicksort
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

/**
 * Name - recursive fibinnaci
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

//! Strings common questions
/**
 * Name - overlapping intervals
 * Q - Given a collection of intervals, merge all overlapping intervals.
 * NOTE - Also known as "merge interval" problem
 * @param {Array} array a 2d array containging intervals e.g [[1,4],[5,7],[6,8]]
 * @returns overlapping intervals
 */
function mergeOverlaps(array){

    if(array === undefined || array.length === 0 )
    {
        return array;
    }

    array = array.sort((a,b) => a[0] - b[0]);

    let stack = [array[0]];

    for(let i = 1; i < array.length; i++)
    {
        const stackTop = stack[stack.length -1][1];
        if(stackTop < array[i][0])
        {
            stack.push(array[i]);
        }
        else if( stackTop >= array[i][0] ) {
            stack[stack.length -1][1] = Math.max(array[i][1], stackTop);
        }
    }
    return stack;
}

// TODO FizzBuzz

/**
 * Name - Longest Word
 * Q -Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
 * If there are two or more words that are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.
 * @param {string} sen the sentence to search through
 * @returns {string} longest word
 */
function LongestWord(sen) { 
    sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    sen = sen.split(" ");
    let longestWord = sen.reduce((accum,curr)=>{
        if(accum.length < curr.length)
        {
            accum = curr;
        }
        return accum;
    });
    return longestWord;
}

/**
 * Name - Max Gap
 * Q - Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number.
 */
function maxDiff(arr)
{
    // Finding max
  let maxInd = null;
  let maxNum = arr.reduce((accum, curr,ind)=>{
        if(accum < curr)
        {
            accum = curr;
            maxInd = ind;
        }
        return accum;
    });

    
    let subArr = arr.slice(0,maxInd);

    let minNum = subArr.reduce((accum, curr)=>{
        if(accum > curr)
        {
            accum = curr
        }
        return accum;
    });

    return maxNum - minNum;
}

//! Sorting common questions
/**
 * Name - Find Missing Number
 * Q- You are given a sorted array of N integers from 1 to N with one number missing. For example, you are given {1, 3, 4, 5}, and N = 5, the missing number is 2.Find the missing number.
 */