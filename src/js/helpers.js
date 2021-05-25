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

export default checkNumber;
