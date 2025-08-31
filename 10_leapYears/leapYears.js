const leapYears = function(checkLeap) {
    if (checkLeap % 4 === 0 && checkLeap % 100 !== 0) {
        return true
    } else if (checkLeap % 400 === 0) {
        return true
    } else {
        return false
    }
};

console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
