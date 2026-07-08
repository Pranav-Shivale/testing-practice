import { Calculator } from "../code/calculator.js";
import { expect, test } from "@jest/globals";

test("Addition", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("Subtraction", () => {
  expect(Calculator.subtract(5, 8)).toBe(-3);
});

test("Division", () => {
  expect(Calculator.divide(1, 4)).toBe(0.25);
});

test("Division by zero", () => {
  expect(Calculator.divide(4, 0)).toBe(Infinity);
});

test("Multiplication", () => {
  expect(Calculator.multiply(5, 5)).toBe(25);
});
