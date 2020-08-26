let result = null;

// Q - Is string a palindrome
function isPalindrome(word)
{
    word = [...word];

    for(let i = 0; i < word.length / 2 ; i++)
    {
        if(word[i] !== word[word.length -1  - i])
        {
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
function binarySearch(sortedArray,val, prefix = 0)
{
    let midIndex = Math.floor((sortedArray.length/ 2));
    let newArray = null;

    if(sortedArray[midIndex] === val)
    {
        return prefix + midIndex;
    }
    else if(val < sortedArray[midIndex])
    {
        newArray = sortedArray.slice(0, midIndex);
    }
    else if(val > sortedArray[midIndex])
    {
        newArray = sortedArray.slice(midIndex);
        prefix += midIndex;
    }

    return binarySearch(newArray,val, prefix);
}


/**
 * non-recursive implimentation of binary search.
 * @param {array} array - the sorted array to search through
 * @param {Number} val - the item/number we want to search.
 */
function nonRecursiveBinarySearch(array, val)
{
    let min = 0;
    let max = array.length - 1;
    let guessIndex = null;
    
    while(min < max)
    {
        guessIndex = Math.floor((min + max)/2);

        if(array[guessIndex] === val)
        {
            return guessIndex;
        }

        if(array[guessIndex] < val)
        {
            min = guessIndex + 1;
        }
        if(array[guessIndex] > val)
        {
            max = guessIndex - 1;
        }
    }
    return -1;
}

// TODO quicksort

// TODO recursive fibinnaci

// TODO longest word

// TODO Max Diff

