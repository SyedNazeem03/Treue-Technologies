let currentInput = '0';

function appendToDisplay(value) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

