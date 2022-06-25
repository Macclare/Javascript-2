const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter another number:" ));
const operator = prompt("Choose an operator for calculation(\n + \n - \n * \n  / \n):");

let result;

if (operator == "+") {
    result = number1 + number2;
}
else if (operator == "-") {
    result = number1 - number2;
}
else if (operator == "*") {
    result = number1 * number2;
}
else if (operator == "/") {
    result = parseFloat(number1) / parseFloat(number2);
}
else {
    alert("error operator")
}

alert(number1 + operator + number2  + "=" + result );

