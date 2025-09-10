const findTheOldest = function(array) {
    let ageArray = array.map(current => {
        if (!("yearOfDeath" in current)) {
            current.age = new Date().getFullYear() - current.yearOfBirth;
            return current;
        } else {
            current.age = current.yearOfDeath - current.yearOfBirth;
            return current;
        }
    })
    
    let oldest = ageArray[0];

    for (const object of ageArray) {
        if (object.age > oldest.age) {
            oldest = object;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
