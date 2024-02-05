/*
! Hey there welcome to my Calculator. This is where I will be doing my calculations on here.
*/

// Initialize an array to store the history
const historyLog = [];

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

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

// Function to save the expression and result to the history log
function saveToHistory(expression, result) {
    const historyEntry = {
        expression: expression,
        result: result,
    };
    historyLog.push(historyEntry);
}

// Function to display the history log in a new window
function displayHistory() {
    const historyWindow = window.open('', 'History Log', 'width=400,height=400,scrollbars=yes,resizable=yes');

    // You can customize how you want to display the history log
    history

