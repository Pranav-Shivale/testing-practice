import { analyzeArray } from "../code/analyzeArray.js";
import { expect, test } from "@jest/globals";

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Single element", () => {
  expect(analyzeArray([25])).toStrictEqual({
    average: 25,
    min: 25,
    max: 25,
    length: 1,
  });
});

test("Empty array", () => {
  expect(() => {
    analyzeArray([]);
  }).toThrow("Empty array.");
});
