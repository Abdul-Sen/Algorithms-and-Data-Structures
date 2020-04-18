
function symmetricDifference(...args){

    let potentialUniques = [];
    let potentialDuplicates = [];

    for( let i = 0; i < args.length ; i++)
    {
        for(let j = 0; j < args.length; j++)
        {
            if(args[j] != args[i]) { //when its not the same array, compare elements

                args[i].forEach(element => {
                    if(args[j].includes(element))
                    {
                        potentialDuplicates.push(element);
                    }
                    else
                    {
                        potentialUniques.push(element);
                    }
                });
            }
        }
    }

    // Find the unique elements and add them to temp

    let temp = [];
    potentialUniques.forEach(element => {
        if(!potentialDuplicates.includes(element))
        {
            temp.push(element);
        }
    });

    // remove duplicates

    let ans = new Set(temp);
    console.log([...ans]);
    return [...ans];
}
symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]); //[1, 4, 5] acc to challenge, [1,4]
// symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]);
// symmetricDifference([1, 2, 3], [5, 2, 1, 4],[2,6,3]); //[4,5,6]


// function symmetricDifference_v1(...args) {

//     let uniques = [];

//     // Find the largest array
//     biggestArrayIndex = 0;

//     for(let i = 0; i < args.length; i++)
//     {
//         if( args[i+1] != undefined && args[i].length > args[i+1].length)
//         {
//             biggestArrayIndex = i;
//         }
//     }

//     console.log(biggestArrayIndex);
//     let res = args.splice(biggestArrayIndex,1);
//     res =  res.flat(1);

//     // loop over rest of arrays using larger arrray as our main array, finding uniques
//     for(let j = 0; j < res.length; j++)
//     {
//         for(let k = 0; k < args.length; k++)
//         {
//             console.log(args[k]);
//         }
//     }


//     return args;
// }

// let results = symmetricDifference_v1([1, 2, 3], [5, 2, 1, 4],[2,6]);
