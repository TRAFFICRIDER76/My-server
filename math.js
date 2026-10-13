const sum = (a, b) => {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const subtract = (a, b) => {
    return a - b;
};

// console.log(sum(2, 3)); // Output: 5
// console.log(multiply(2, 3)); // Output: 6
// console.log(divide(6, 2)); // Output: 3
// console.log(subtract(5, 2)); // Output: 3

module.exports = {
    sum,
    multiply,
    divide,
    subtract
};  