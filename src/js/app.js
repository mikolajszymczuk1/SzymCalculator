import { addition, subtraction, multiplication, division } from "./operations.js";
import checkNumber from "./helpers.js";

const keyboard = document.querySelector(".calculator__keyboard");
const output = document.querySelector(".calculator__output");
const screen_operation_type = document.querySelector(".calculator__operation-type");

let result = 0;
let operationType = "";
let numberA = "";
let numberB = "";

keyboard.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        controller(e.target.dataset.operation);
    }
});

// Main function
function controller(op) {
    switch(op) {
        case "÷":
            operationType = "÷";
            break;
    
        case "x":
            operationType = "x";
            break;

        case "-":
            operationType = "-";
            break;

        case "+":
            operationType = "+";
            break;
        
        case "=":
            numberA = (numberA === "") ? "0" : numberA;
            numberB = (numberB === "") ? "0" : numberB;

            numberA = parseFloat(numberA);
            numberB = parseFloat(numberB);

            switch(operationType) {
                case "+":
                    result = addition(numberA, numberB);
                    break;
                
                case "-":
                    result = subtraction(numberA, numberB);
                    break;
                
                case "x":
                    result = multiplication(numberA, numberB);
                    break;

                case "÷":
                    result = division(numberA, numberB);
                    break;
            }
            
            // Show output
            output.innerText = result.toString();
            
            // Reset values after operation
            result = 0;
            numberA = "";
            numberB = "";
            operationType = "";

            break;

        default:
            addNumber(op);
    }

    screen_operation_type.innerText = operationType;
}

// Function add next number to numberA or numberB
function addNumber(number) {
    if (operationType === "") {
        if (checkNumber(number, numberA)) {
            numberA += number;
            output.innerText = numberA;
        } 
    } else {
        if (checkNumber(number, numberB)) {
            numberB += number;
            output.innerText = numberB;
        }
    }
}
