let expression = '';

function appendNumber(number) {
    expression += number;
    document.getElementById('result').value = expression;
}

function appendOperator(operator) {
    expression += operator;
    document.getElementById('result').value = expression;
}

function clearScreen() {
    expression = '';
    document.getElementById('result').value = expression;
}

function deleteLast() {
    expression = expression.slice(0, -1);
    document.getElementById('result').value = expression;
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        document.getElementById('result').value = expression;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
