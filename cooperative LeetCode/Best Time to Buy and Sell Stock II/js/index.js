/***
 * ACCEPTED ANSWER
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let bool = true;
    let trough = prices[0];
    let troughIndex = 0;
    let profit = 0;
    do{

    if(prices.length <= 1)
    {
        bool = false;
        break;
    }
    
    // find a trough
    trough = trough;
    troughIndex = troughIndex;
    for(let i = troughIndex; i < prices.length -1; i++)
    {
       if(prices[i] == prices[i+1])
       {
           continue;
       }
        if(prices[i] <= trough && prices[i] <= prices[i+1])
        {
            // make this the new trough & exit
            trough = prices[i];
            troughIndex = i;
            break;
        }
    }

    for(let i = troughIndex + 1; i < prices.length; i++)
    {
        if(prices[i] > trough && prices[i+1] < prices[i])
        {
            profit += prices[i] - trough;
            troughIndex = i;
            trough = prices[i];
            break;
        }
        else if (prices[i] > trough && prices[i+1] == undefined)
        {
            profit += prices[i] - trough;
            trough = prices[i];
            troughIndex = i;
            bool = false;
            break;
        }
        else if (prices[i] <= trough && prices[i+1] == undefined)
        {
            bool = false;
            break;
        }
    }

    }
    while(bool)

    return profit;
}

/**
 *      working solution passing 199/200 tests but exceeds leetcode heap allocation on final test. check loop imp above for accepted answer
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_recursive = function(prices) {

    // base condition
    if(prices.length <= 1)
    {
        return 0;
    }

    // find a trough
    let trough = prices[0];
    let troughIndex = 0;
    for(let i = 0; i < prices.length -1; i++)
    {
       if(prices[i] == prices[i+1])
       {
           continue;
       } 
        if(prices[i] <= trough && prices[i] <= prices[i+1])
        {
            // make this the new trough & exit
            trough = prices[i];
            troughIndex = i;
            break;
        }
    }

    // breakup
    prices = prices.slice(troughIndex + 1, prices.length); // not including min
    let profit = 0;

    // Finding crest and profit
    for(let i = 0; i < prices.length; i++)
    {
        if(prices[i] > trough && prices[i+1] < prices[i])
        {
            profit = prices[i] - trough;
            troughIndex = i;
            break;
        }
        else if (prices[i] > trough && prices[i+1] == undefined)
        {
            profit = prices[i] - trough;
            troughIndex = i;
            break;
        }
    }

    let temp = maxProfit(prices.slice(troughIndex+1,prices.length));
    return profit + temp;
}