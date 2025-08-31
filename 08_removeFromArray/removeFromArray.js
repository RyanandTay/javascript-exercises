const removeFromArray = function(array, removeItem) {
    let removeIndex = array.findIndex((currentItem) => currentItem === removeItem);
    array.splice(removeIndex, 1)
    return array
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
