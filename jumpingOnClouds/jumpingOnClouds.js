function jumpingOnClouds(c) {
    let noOfJumps = 0;
    for(let i =0; i <= c.length;i++)
    {
        c[i+2] == 0? i+= 1: null;
        noOfJumps++;
        if (c[i+2] == undefined) break;
    }
    return noOfJumps
}

jumpingOnClouds([ 0, 0, 0, 1, 0, 0 ]); // expected 3 jumps

jumpingOnClouds([0,0, 1, 0, 0, 1, 0]); // expected 4 jumps