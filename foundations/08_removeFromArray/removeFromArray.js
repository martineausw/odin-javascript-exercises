const removeFromArray = function(array, ...elements) {
    let newArray = array;
    for (const element of elements) 
        newArray = newArray.filter(item => item !== element);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
