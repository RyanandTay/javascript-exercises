const fibonacci = function(a) {
    let array = [1, 1];
    if (+a < 0) {
        return "OOPS";
    } else if (+a === 0 || +a === 1) {
        return +a;
    } else {
        for (let i = 2; i <= +a; i++) {
            array.push(array[i-1] + array[i-2]);
        }
    }
    
    return array[+a - 1];
};

// Do not edit below this line
module.exports = fibonacci;
