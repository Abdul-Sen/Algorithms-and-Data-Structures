/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // setting boundries
    const MAXVAL = Math.pow(2,31) -1;
    const MINVAL = Math.pow(-2,31);
    
    // converting to array
    let digits = Array.from(String(x), Number);
        let isNegative = isNaN(digits[0])? true: false;
        if(isNegative)
        {
            digits.splice(0,1);
        }
    
    // reversing and joining back
        digits.reverse();
        digits = digits.join('');
        digits = isNegative? digits*-1 : digits* 1;
    
    
        if(digits > MAXVAL)
        {
            return 0;
        }
       else if(digits < MINVAL)
        {
            return 0;
        }
    
        return digits;
        
};