const removeFromArray = function(array, removeItem) {
    let removeIndex = array.findIndex(removeItem);
    return array.splice(removeIndex)
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
