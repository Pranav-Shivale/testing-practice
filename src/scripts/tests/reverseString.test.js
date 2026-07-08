import { reverseString } from "../code/reverseString.js";
import { expect, test } from "@jest/globals";

test("Reverse lower case characters", () => {
  expect(reverseString("banana")).toMatch("ananab");
});

test("Reverse upper case characters", () => {
  expect(reverseString("BANANA")).toMatch("ANANAB");
});

test("Words with space", () => {
  expect(reverseString("hello, world!")).toMatch("!dlrow ,olleh");
});

test("Empty string", () => {
  expect(reverseString("")).toMatch("");
});

test("Number and special characters", () => {
  expect(reverseString("67@#4")).toMatch("4#@76");
});

test("Input other than string", () => {
  expect(() => {
    reverseString(null);
  }).toThrow("Invalid datatype.");
});
