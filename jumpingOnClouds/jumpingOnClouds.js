function jumpingOnClouds(c) {
    let noOfJumps = 0;
    for(let i =0; i <= c.length;i++)
    {
        c[i + 2] == 0 ? i++ : null;
        noOfJumps++;
    }
    return noOfJumps
}

// jumpingOnClouds([ 0, 0, 0, 1, 0, 0 ]); // expected 3 jumps

// jumpingOnClouds([0,0, 1, 0, 0, 1, 0]); // expected 4 jumps


function jumpingOnClouds_v2(clouds){
    // Split array into 2 clouds each
    var arrays = [], size = 2;
    while (clouds.length > 0)
    arrays.push(clouds.splice(0, size));
    console.log(arrays);
    repeatedString.length() - 1 // 2   + (repeatedString.len() -1) % 2
}

jumpingOnClouds_v2([0,0, 1, 0, 0, 1, 0]); // expected 4 jumps
