import { addNumber } from "../src/js/helpers.js";

describe("addNumber tests", () => {
    let number = "";
    const output = document.createElement("div");

    test("Should add 5 to 'number' and set output.innerText to 'number' value", () => {
        number = addNumber("5", number, output);
        expect(number).toEqual("5");
        expect(output.innerText).toEqual(number);
    });

    test("Should add 10 to 'number' and set output.innerText to 'number' value", () => {
        number = "";
        number = addNumber("10", number, output);
        expect(number).toEqual("10");
        expect(output.innerText).toEqual(number);
    });
});
