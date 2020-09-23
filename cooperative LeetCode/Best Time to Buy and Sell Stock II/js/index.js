
// TODO - Current way of picking a trough element is BUGGY
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // base condition
    if(prices.length <= 1)
    {
        return 0;
    }

    // todo - FIX THIS PART

    // find the trough for which we know there is a crest
    let min = prices[0];
    let minInd = 0; 
    for(let i = 1; i < prices.length; i++)
    {
        if(min >= prices[i] && prices[i] <= prices[i+1])
        {
            min = prices[i];
            minInd = i;
            break;
        }
        else
        {
            break;
        }
    }

    // breakup
    prices = prices.slice(minInd + 1, prices.length); // not including min
    let profit = 0;
    for(let i = 0; i < prices.length; i++)
    {
        if(prices[i] > min && prices[i+1] != undefined && prices[i+1] < prices[i])
        {
            profit = prices[i] - min;
            minInd = i;
            break;
        }

        if(prices[i+1] == undefined)
        {
            if(prices[i] - min >= 0)
            {
                profit = prices[i] - min;
                minInd = i;    
            }
        }
    }
    let temp = maxProfit(prices.slice(minInd+1,prices.length));
    return profit + temp;
}
