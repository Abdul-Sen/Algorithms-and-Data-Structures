let item = "DDUUDDUDUUUD";
let num = 12;


function countingValleys(n, s) {
    let vallyCounts = 0;
    let aboveSeaLvl = false;
    let DCount = 0;
    let UCount = 0;
    [...s].forEach(char=>{
        if(UCount > DCount)
        {
            aboveSeaLvl = true
        }
        else{
            aboveSeaLvl = false;
        }
        if(char == 'U')
        {
            UCount += 1;
        }
        else 
        {
            DCount += 1;
        }

        if(UCount == DCount && UCount != 0 && aboveSeaLvl == false)
        {
            vallyCounts += 1;
        }
    });
    console.log(vallyCounts);
    return vallyCounts;
}


countingValleys(num,item);

function countingValleysOld(n, s) {
    let DCount = 0;
    let UCount = 0;
    [...s].forEach(char =>{
        char=='U'? UCount++: DCount++;
    })
    console.log(DCount,UCount);
    return (DCount - UCount);
}