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
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to handle decimal point
function addDecimalPoint() {
    const currentDisplayValue = document.getElementById('display').value;
    // Check if the current value already contains a decimal point
    if (!currentDisplayValue.includes('.')) {
        document.getElementById('display').value += '.';
    }
}
