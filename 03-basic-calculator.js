// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        default:
            return null;
    }
}

function runCalculator() {
    // COLLECT FIRST NUMBER FROM USER
    let x = parseFloat(prompt("Enter the first number:"));
    while (isNaN(x)) {
        x = parseFloat(prompt("Invalid input. Please enter a number:"));
    }

    // COLLECT SECOND NUMBER FROM USER
    let y = parseFloat(prompt("Enter the second number:"));
    while (isNaN(y)) {
        y = parseFloat(prompt("Invalid input. Please enter a number:"));
    }

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operation = prompt("Enter the operation (+, -, *, /):");
    while (!['+', '-', '*', '/'].includes(operation)) {
        operation = prompt("Invalid operation. Please enter +, -, *, or /:");
    }

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    const result = calculate(x, y, operation);
    alert(`The result of ${x} ${operation} ${y} is ${result}`);

    // Ask if user wants to perform another calculation
    if (confirm("Do you want to perform another calculation?")) {
        runCalculator();
    }
}

// Run the calculator
runCalculator();