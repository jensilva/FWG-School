const { sum, subtract, divide, multiply} = require("../../src/math/basic.js");

describe("Basic Math Functions", () => {

it("should sum N numbers", () => {
    const number1 = 5;
    const number2 = 6;
    const result = 11;

    expect(sum(number1, number2)).toBe(result);
})

it("should subtract N numbers", () => {
    const number1 = 10;
    const number2 = 5;
    const result = 5;
    const negativeResult = -5;

    expect(subtract(number1, number2)).toBe(result);
    expect(subtract(number2, number1)).toBe(negativeResult);
})

it("should multiply numbers", () => {
    const number1 = 5;
    const number2 = 6;
    const result = 30;

    expect(multiply(number1, number2)).toBe(result);

})

it("should divide numbers", () => {
    const number1 = 10;
    const number2 = 2;
    const result = 5;

    expect(divide(number1, number2)).toBe(result);
    expect(divide(0, 0)).toBeNaN();
    expect(divide(1,0)).toBePositiveInfinity();

})



})