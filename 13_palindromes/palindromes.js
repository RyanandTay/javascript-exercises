const palindromes = function (string) {
    let originalOrder = [...string];
    originalOrder = originalOrder.filter((item) => /[a-zA-Z0-9]/.test(item));
    let reversedOrder = originalOrder.slice();

    reversedOrder.reverse();
    reversedOrder = reversedOrder.join("").toLowerCase();
    originalOrder = originalOrder.join("").toLowerCase();


    return reversedOrder === originalOrder;
};

// Do not edit below this line
module.exports = palindromes;
