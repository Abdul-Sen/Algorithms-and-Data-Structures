function hourglassSum(arr) {
    let hourglassSums = [];
    let startPos = 0;

    for (let i = 0; i <= 3; i++) {


        do {

            hourglassSums.push(getHourNums(startPos, arr[i], arr[i + 1], arr[i + 2]));

            startPos++;

            if (startPos == 4) {
                startPos = 0; // Exit condition && resetting position for next batch of arrays
            }
        }
        while (startPos != 0)


    }
    let maxValue = Math.max.apply(Math, hourglassSums);
    console.log(maxValue);
    return maxValue;
}

function getHourNums(startPos, arTop, arMid, arBottom) { //alt: ar1,ar2,ar3
    let myarr = [];

    //adding nums from top & bottom array
    for (let i = startPos; i < startPos + 3; i++) {
        myarr.push(arTop[i]);
        myarr.push(arBottom[i]);
    }

    // adding nums from mid ar
    myarr.push(arMid[startPos + 1]);

    // summing array
    let result = myarr.reduce((previousValue, currentValue) => {
        previousValue += currentValue;
        return previousValue;
    });

    console.log(myarr); //DEBUG

    return result;
}
hourglassSum([ // when i = 1
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
]) // expected 0
