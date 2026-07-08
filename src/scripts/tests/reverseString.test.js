import { reverseString } from "../code/reverseString.js";
import { expect, test } from "@jest/globals";

test("Lower case word", () => {
  expect(reverseString("banana")).toMatch("ananab");
});

test("Upper case word", () => {
  expect(reverseString("BANANA")).toMatch("ANANAB");
});

test("Words with space", () => {
  expect(reverseString("hello, world!")).toMatch("!dlrow ,olleh");
});

test("Empty string", () => {
  expect(reverseString("")).toMatch("");
});

test("Numbers and special characters", () => {
  expect(reverseString("67@#9")).toMatch("9#@76");
});

test("Input other than string", () => {
  expect(() => {
    reverseString(null);
  }).toThrow("Invalid datatype.");
});
