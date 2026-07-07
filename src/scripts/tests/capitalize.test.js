import { capitalize } from "../code/capitalize.js";
import { expect, test } from "@jest/globals";

test("All lower case characters", () => {
  expect(capitalize("banana")).toMatch("Banana");
});

test("All upper case characters", () => {
  expect(capitalize("BANANA")).toMatch("BANANA");
});

test("Already upper case first character", () => {
  expect(capitalize("Banana")).toMatch("Banana");
});

test("Words with space", () => {
  expect(capitalize("hello, world!")).toMatch("Hello, world!");
});

test("Empty string", () => {
  expect(capitalize("")).toMatch("");
});

test("Input other than string", () => {
  expect(() => {
    capitalize(123);
  }).toThrow("Invalid datatype.");
});
