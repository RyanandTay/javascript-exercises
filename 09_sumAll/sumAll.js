const sumAll = function(firstInt, secondInt) {
    let topInt;
    let bottomInt;

    if (firstInt > secondInt) {
        topInt = firstInt;
        bottomInt = secondInt;
    } else {
        topInt = secondInt;
        bottomInt = firstInt;
    }

    sumArray = [bottomInt];

    if ((!(Number.isInteger(firstInt)) || !(Number.isInteger(secondInt)) || firstInt < 0 || secondInt < 0)) {
        return "ERROR"
    }

    for (let i = bottomInt; i < topInt; i++) {
        sumArray.push(i + 1);
    }

    let totalInt = 0;

    return sumArray.reduce((totalInt, currentItem) => (totalInt + currentItem), 0)
};

// Do not edit below this line
module.exports = sumAll;
