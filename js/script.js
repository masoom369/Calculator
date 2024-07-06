// Function to append characters to the output display
function appendToOutput(value) {
    const output = document.getElementById('output');
    output.value += value;
}

// Function to clear the output display
function clearOutput() {
    document.getElementById('output').value = '';
}

// Function to evaluate the expression
function calculate() {
    const output = document.getElementById('output');
    let input = output.value;

    try {
        let result = eval(input);

        // Check if result is finite
        if (!isFinite(result)) {
            throw new Error('Result is not finite');
        }

        // Display the result
        output.value = result;
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
        alert('Invalid input');
        clearOutput();
    }
}

// Function to validate input characters
function validateInput(input) {
    input.value = input.value.replace(/[^\d\/+*.\-]/g, ''); // Allow digits, operators, and decimal point
}

// Function to handle keyboard events
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const output = document.getElementById('output');

    // Allow digits, operators, decimal point, Enter, Backspace, and Delete
    if (/[\d\/+*.\-]/.test(key)) {
        event.preventDefault();
        appendToOutput(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace' || key === 'Delete') {
        event.preventDefault();
        clearOutput();
    }
});
