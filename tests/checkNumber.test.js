import { checkNumber } from "../src/js/helpers.js";

describe("checkNumber function tests", () => {
    let num;
    let toCheck;

    test("For num = '.' and toCheck = '' should return false", () => {
        num = ".";
        toCheck = "";
        expect(checkNumber(num, toCheck)).toBeFalsy();
    });

    test("For num = '0' and toCheck = '0' should return false", () => {
        num = "0";
        toCheck = "0";
        expect(checkNumber(num, toCheck)).toBeFalsy();
    });

    test("For num = '3' and toCheck = '0' should return false", () => {
        num = "3";
        toCheck = "0";
        expect(checkNumber(num, toCheck)).toBeFalsy();
    });

    test("For num = '.' and toCheck = '5.3' should return false", () => {
        num = ".";
        toCheck = "5.3";
        expect(checkNumber(num, toCheck)).toBeFalsy();
    });

    test("For num = '9' and toCheck = '550' should return true", () => {
        num = "9";
        toCheck = "550";
        expect(checkNumber(num, toCheck)).toBeTruthy();
    });
});
