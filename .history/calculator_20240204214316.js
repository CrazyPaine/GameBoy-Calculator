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

        const result = evaluateExpression(inputExpression);

        if (!isValidResult(result)) {
            throw new Error('Invalid result');
        }

        // No need to save to history if you don't want it
        // saveToHistory(inputExpression, result);

        updateDisplay(result);
    } catch (error) {
        updateDisplay('Error: ' + error.message);
    }
}

function evaluateExpression(expression) {
    try {
        // Replace this with your own expression evaluation logic or library
        // For demonstration purposes, we are using eval here, but it's not recommended for production
        const result = eval(expression);
        return result;
    } catch (error) {
        throw new Error('Invalid expression');
    }
}

function isValidExpression(expression) {
    return /^[0-9+\-*/().\s]+$/.test(expression);
}

function isValidResult(result) {
    return isFinite(result);
}

function endsWithOperator(expression) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = expression.trim().slice(-1);
    return operators.includes(lastChar);
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
