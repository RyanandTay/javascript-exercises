// const getTheTitles = function(objectArray) {
//     let titleArray = [];
//     for (const object of objectArray) {
//         titleArray.push(object.title);
//     }

//     return titleArray;
// };

const getTheTitles = function(objectArray) {
    return objectArray.map(currentItem => currentItem.title);
}


// Do not edit below this line
module.exports = getTheTitles;
