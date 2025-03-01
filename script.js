// Append character to the result input
function appendToResult(value) {
    document.getElementById('result').value += value;
}

// Clear the result input
function clearResult() {
    document.getElementById('result').value = '';
}

// Calculate the result of the expression
function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        // Using eval to calculate the result
        document.getElementById('result').value = eval(result);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
