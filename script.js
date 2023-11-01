const input = document.getElementById("input");
const btn = document.querySelectorAll(".btn");
const numberBtn = document.querySelectorAll(".numberBtn");
const operateBtn = document.querySelectorAll(".operateBtn");
const clearBtn = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const equalsBtn = document.querySelector(".equalsBtn");
const dotBtn = document.querySelector(".dotBtn");


let numOne = "";
let numTwo = "";
let operator = "";
let displayValue = "";

function operate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
            case '/':
                if (num2 === 0) {
                    return "Error: Division by zero";
                }
                return num1 / num2;
            default:
                return "Error: Invalid operator";
            }
        }



btn.forEach(btn => {
    btn.addEventListener("click", function() {

        if (operator === "") {
            numOne += btn.textContent;
        } else {
            numTwo += btn.textContent;  
        }
        displayValue += btn.textContent;
        input.textContent = displayValue;
    });
});

operateBtn.forEach (btn => {
    btn.addEventListener("click", () => {
        operator = btn.textContent;
        input.textContent = displayValue;
    });
});

deleteBtn.addEventListener("click", () => {
    if(displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);

        if (operator === "") {
            numOne = numOne.slice(0, -1);
        } else {
            numTwo = numTwo.slice(0, -1);
        }
        input.textContent = displayValue;
    }
});

clearBtn.addEventListener("click", () => {
    numOne = "";
    numTwo = "";
    operator = "";
    displayValue = "";
    input.textContent = "0";
});

equalsBtn.addEventListener("click", () => {
    if (numOne !== "" && operator !== "" && numTwo !== "") {
        const result = operate(numOne, numTwo, operator);
        // const decimalPlace = 4;
        // const roundedResult = result.toFixed(decimalPlace); 
        displayValue = result.toString();
        numOne = result.toString();
        operator = "";
        numTwo = "";
        input.textContent = displayValue;
    }
    displayValue = "";
});

/*
1. First make the operate function work on the calculator input field.
So that, it is able to add the numbers on the input field.
Use operate funciton on click so that if any math operator is pressed or clicked,
it should perform that action when the =s button or key is pressed while not showing it.
*/