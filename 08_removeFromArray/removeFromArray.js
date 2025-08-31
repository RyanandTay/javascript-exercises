const removeFromArray = function(array) {
    removeItems = Array.from(arguments).slice(1);
    array = array.filter((currentItem) => !(removeItems.includes(currentItem)));
    return array
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
