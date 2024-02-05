/*
! Hey there welcome to my Calculator. This is where I will be doing my calculations on here.
*/

function calculateResult() {
    try {
        const inputExpression = document.getElementById('display').value;

        if (!isValidExpression(inputExpression)) {
            throw new Error('Invalid expression');
        }

        const result = eval(inputExpression);

        if (!isValidResult(result)) {
            throw new Error('Invalid result');
        }

        // Save the expression and result to the history log
        saveToHistory(inputExpression, result);

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error: ' + error.message;
    }
}

// Function to handle decimal point
function addDecimalPoint() {
    const currentDisplayValue = document.getElementById('display').value;
    
    // Check if the current value already contains a decimal point or ends with an operator
    if (!currentDisplayValue.includes('.') && !endsWithOperator(currentDisplayValue)) {
        document.getElementById('display').value += '.';
    }
}

// Helper function to check if the expression is valid
function isValidExpression(expression) {
    // Add your validation logic here
    return /^[0-9+\-*/().\s]+$/.test(expression);
}

// Helper function to check if the result is valid
function isValidResult(result) {
    // Add your validation logic here
    return isFinite(result);
}

// Helper function to check if the expression ends with an operator
function endsWithOperator(expression) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = expression.trim().slice(-1);

    return operators.includes(lastChar);
}

