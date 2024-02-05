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

        // Save the expression and result to the history log
        saveToHistory(inputExpression, result);

        updateDisplay(result);
    } catch (error) {
        updateDisplay('Error: ' + error.message);
    }
}

function evaluateExpression(expression) {
    try {
        // Implement your own expression evaluation logic here
        const result = math.evaluate(expression); // Assuming you use a math library or your custom evaluator
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
