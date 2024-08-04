function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);


    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
         return;
     }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('Division by zero is not allowed');
                return;
            }
            break;
        case '%':
            if (num2 !== 0) {
                result = num1 % num2;
            } else {
                alert('Division by zero is not allowed');
                return;
            }
            break;
        default:
            alert('Invalid operation');
            return;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

function turnOff() {
    alert('Thank you for using the calculator');
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = 'Result: ';
}
