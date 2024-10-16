// STEP 1
function halfNumber(number) {
    const result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
    return result;
}

// STEP 2
function squareNumber(number) {
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
}

// STEP 3
function percentOf(num1, num2) {
    const result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

// STEP 4
function findModulus(num1, num2) {
    const result = num1 % num2;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}

// STEP 5
// You can test the functions here
console.log(halfNumber(5));
console.log(squareNumber(3));
console.log(percentOf(2, 4));
console.log(findModulus(10, 4));
