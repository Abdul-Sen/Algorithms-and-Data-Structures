// Find number of 'a' in repeated string.
function repeatedString(str, maxIndex) {
    let aCount = 0;
    let aFromRemainder = 0;

    aCount = aCounter(str);

    // Build a string out of (maxIndex % str.length), then find the number of 'a' in that string
    if (maxIndex % str.length != 0) {
        let remainderStringLength = (maxIndex % str.length);
        let remainderString = str.substring(0, remainderStringLength);
        aFromRemainder = aCounter(remainderString);
    }

    // calculating total number of 'a' in un-remaindered string
    let result = (parseInt(maxIndex / str.length) * aCount);
    result += aFromRemainder; //adding 'a's from remainder string into final ans
    return result;
}

function aCounter(str)
{
    let aCount = 0;
    [...str].forEach(char => {
        if (char == 'a')
            aCount++;
    });
    return aCount;
}

repeatedString('gfcaaaecbg', 547602, false); //expected 164280 , RESULT GETTING - 164282
repeatedString('aba', 10, false); // expected 7
repeatedString('a', 1000000000000, false);
repeatedString('gfcaaaecbg', 547602, true);
repeatedString('aba', 10, true); // expected 7