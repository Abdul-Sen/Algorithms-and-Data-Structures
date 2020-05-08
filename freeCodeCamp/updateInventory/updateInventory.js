function updateInventory(currentInv, newInv)
{
    // update existing items
    currentInv.map((currentVal,index,arr)=>{

       let item = newInv.find((currentInvItem)=> currentInvItem[1] == currentVal[1]);
      
       if(item != undefined)
       {
        arr[index][0] += item[0];
       }
    })

    // add new items
    newInv.map((val,ind,arr)=>{
        let item = currentInv.find((valInv)=> valInv[1] == val[1]);
        if(item == undefined){
            currentInv.push(val);
        }
    });

    // sort in alphabetical order
    currentInv.sort((a,b)=> {

        if(a[1][0] < b[1][0])
        {
            return -1;
        }
        else if (a[1][0] > b[1][0])
        {
            return 1;
        }
        else
        {
            return 0;
        }
    })

    return currentInv;
}
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);

// function doesItemExist(arr, itemName)
// {
//     arrr.forEach((val, index,myArr) => {
//         if(val[1] == itemName)
//         {
//             return index;
//         }
//     });
//     return -1;
// }
// function updateInventory_v1(currentInv, newInv) {

//     // Update existing items in currentInv
//     currentInv.forEach((currentInvElement, index, currentArray) => {
//         newInv.forEach(newInvElement => {
//             // if a match is found, update existing inv
//             if (newInvElement[1] == currentInvElement[1]) {
//                 let temp = [newInvElement[0] + currentInvElement[0], currentInvElement[1]];
//                 currentArray[index] = temp;
//             }
//         });

//     });

//     console.log(currentInv);

//     // Find new items, add them to currentInv




//     // TODO - Sort in alphabetical order
//     return currentInv;
// }