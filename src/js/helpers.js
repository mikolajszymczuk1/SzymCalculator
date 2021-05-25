// Function for validating a number
function checkNumber(num, toCheck) {
    if (num === "." && toCheck === "") {
        return false;
    }

    if (num === "0" && toCheck === "0") {
        return false;
    }

    if (num != "." && toCheck === "0") {
        return false;
    }
    
    if (num === "." && toCheck.includes(".")) {
        return false;
    }

    return true;
}

// Function add next number to numberA or numberB
function addNumber(operation, number, outDiv) {
    let newNumber = number + operation;
    outDiv.innerText = newNumber;
    return newNumber;
}

export { checkNumber, addNumber };
