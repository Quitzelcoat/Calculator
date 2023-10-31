const input = document.getElementById("input");
const btn = document.querySelectorAll(".btn");

let numOne = "";
let numTwo = "";
let operator = "";

function operate(num1, num2, operator) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
            case '/':
                if (num2 === 0) {
                    return "Error: Division by zero";
                }
                return divide(num1, num2);
            default:
                return "Error: Invalid operator";
    }
}


function displayShow() {

    btn.forEach(btn => {
        btn.addEventListener("click", function() {
            let val = btn.value;
            input.value += val;
        });
    });
}

displayShow();

