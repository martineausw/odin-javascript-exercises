const sumAll = function(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number")
        return "ERROR";

    if (a < 0 || b < 0) 
        return "ERROR";
        
    if (a % 1 !== 0 || b % 1 !== 0)
        return "ERROR";

    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return max * (max + 1) / 2 - min + 1;
};

// Do not edit below this line
module.exports = sumAll;
