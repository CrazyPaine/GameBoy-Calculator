/*
! Hey there welcome to my Calculator. This is where I will be doing my calculations on here.
*/

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


// Add this to your JavaScript
const undoStack = [];
const redoStack = [];

function saveState() {
    undoStack.push(document.getElementById('display').value);
    redoStack.length = 0; // Clear redo stack when a new state is saved
}

function undo() {
    if (undoStack.length > 1) {
        redoStack.push(undoStack.pop());
        document.getElementById('display').value = undoStack[undoStack.length - 1];
    }
}

function redo() {
    if (redoStack.length > 0) {
        undoStack.push(redoStack.pop());
        document.getElementById('display').value = undoStack[undoStack.length - 1];
    }
}
