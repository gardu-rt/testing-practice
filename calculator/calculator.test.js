import Calculator from "./calculator.js";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("adds 2 + 3 equal 5", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test("subtracts 5 - 2 equal 3", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  test("divides 4 / 2 equal 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("divides 4 / 0 equal Error", () => {
    expect(calculator.divide(4, 0)).toBe("Error");
  });
  test("multiplies 5 * 2 equal 10", () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
});
