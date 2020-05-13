
// helper func to get total unique perms in any given string
function subPerm(originalArr)
{
    let arr = [...originalArr];

    // Loop over current array, seeing if current array fits uniqueness.
    // Then change the array so that it is a different permutation of the same values.
    // Repeat until you cover all permutation cases
    let eleFlag = false;
    let uniques = 0;

    //loop over whole array, swapping
    for(let i = 0; i < arr.length; i++)
    {
        // if two same ele are next to each other, detect it. Otherwise the array has all unique elements next to one another
        arr.forEach((element,ind) => {
            if(element == arr[ind+1])
            {
                eleFlag = true;
            }
        });
        
        if(eleFlag == false)
        {
            uniques++;
        }
        else{
            eleFlag = false;
        }

        if(arr[i+1] != undefined)
        {
            // swap t
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    return uniques;
}


function permAlone(str) {
    let charArr = [...str];

    let uniquePermCounter = 0;
    let permString = [];

    for(let i =0; i < charArr.length; i++)
    {
        permString = [...permString, charArr[i]];
        uniquePermCounter += subPerm(permString);
    }

    return uniquePermCounter;
  }
  
  let result = null;
 result = permAlone('aabb');
 result = permAlone('abac');
 result = permAlone('abcdefa');
//   permAlone('abcdefa');

// 1 - Find total number of permutations 
// 2 - Find perms where no two letter next to one another is same