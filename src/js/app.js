import { addition, subtraction, multiplication, division } from "./operations.js";
import checkNumber from "./helpers.js";

const keyboard = document.querySelector(".calculator__keyboard");
const screen = document.querySelector(".calculator__screen");

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
            operationType = "division";
            break;
    
        case "*":
            operationType = "multiplication";
            break;

        case "-":
            operationType = "subtraction";
            break;

        case "+":
            operationType = "addition";
            break;
        
        case "=":
            numberA = (numberA === "") ? "0" : numberA;
            numberB = (numberB === "") ? "0" : numberB;

            numberA = parseFloat(numberA);
            numberB = parseFloat(numberB);

            switch(operationType) {
                case "addition":
                    result = addition(numberA, numberB);
                    break;
                
                case "subtraction":
                    result = subtraction(numberA, numberB);
                    break;
                
                case "multiplication":
                    result = multiplication(numberA, numberB);
                    break;

                case "division":
                    result = division(numberA, numberB);
                    break;
            }
            
            // Show output
            screen.innerText = result.toString();
            
            // Reset values after operation
            result = 0;
            numberA = "";
            numberB = "";
            operationType = "";

            break;

        default:
            addNumber(op);
    }
}

// Function add next number to numberA or numberB
function addNumber(number) {
    if (operationType === "") {
        if (checkNumber(number, numberA)) {
            numberA += number;
            screen.innerText = numberA;
        } 
    } else {
        if (checkNumber(number, numberB)) {
            numberB += number;
            screen.innerText = numberB;
        }
    }
}
