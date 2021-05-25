import { addition, subtraction, multiplication, division } from "../src/js/operations.js";

// Operation +
describe("Math operations tests", () => {
    describe("addition function test", () => {
        test("10 + 4 should equal 14", () => {
            expect(addition(10, 4)).toBe(14);
        });
    
        test("-10 + 10 should equal 0", () => {
            expect(addition(-10, 10)).toBe(0);
        });
    });
    
    // Operation -
    describe("subtraction function test", () => {
        test("20 - 4 should equal 16", () => {
            expect(subtraction(20, 4)).toBe(16);
        });
    
        test("10 - 10 should equal 0", () => {
            expect(subtraction(10, 10)).toBe(0);
        });
    });
    
    // Operation x
    describe("multiplication function test", () => {
        test("5 x 4 should equal 20", () => {
            expect(multiplication(5, 4)).toBe(20);
        });
    
        test("100 x 0 should equal 0", () => {
            expect(multiplication(100, 0)).toBe(0);
        });
    });
    
    // Operation /
    describe("division function test", () => {
        test("30 / 2 should equal 15", () => {
            expect(division(30, 2)).toBe(15);
        });
    
        test("244 and 244 should equal 1", () => {
            expect(division(244, 244)).toBe(1);
        });
    
        test("Division by 0 check - (10 / 0) should return 'Dzielenie przez zero'", () => {
            expect(division(10, 0)).toBe("Dzielenie przez zero");
        });
    });
    
});
