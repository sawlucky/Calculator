let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = String(result);
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;
}
