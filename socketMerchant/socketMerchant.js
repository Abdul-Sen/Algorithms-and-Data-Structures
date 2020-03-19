let arr = [4 ,5, 5 ,5 ,6 ,6 ,4, 1, 4 ,4 ,3 ,6 ,6 ,3, 6, 1, 4, 5, 5 ,5];
let arr2 = [1, 1, 3 ,1, 2, 1, 3, 3, 3, 3];

function sockMerchant(n, ar) {
    ar.sort();
    console.log(ar);
    let pair = 0;
    for(let i =0; i<= ar.length && ar[i] != undefined;i++)
    {
        if(ar[i] == ar[i+1]){
            pair += 1;
            ar.splice(i,2);
            i -= 1;
        }
    }
    return pair;
}

sockMerchant(arr2.length,arr2);