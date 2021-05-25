// Return sum of two numbers
function addition(a, b) {
    return a + b;
}

// Return difference of two numbers
function subtraction(a, b) {
    return a - b;
}

// Return product of two numbers
function multiplication(a, b) {
    return a * b;
}

// Return quotient of two numbers
function division(a, b) {
    if (b != 0) {
        return a / b;
    }

    return "Dzielenie przez zero";
}

export { addition, subtraction, multiplication, division };
