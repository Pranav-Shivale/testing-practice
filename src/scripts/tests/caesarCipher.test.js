import { expect, test } from "@jest/globals";
import { ceaserCipher } from "../code/caesarCipher.js";

test("One lowercase character", () => {
  expect(ceaserCipher("a", 5)).toMatch("f");
});

test("One uppercase character", () => {
  expect(ceaserCipher("W", 3)).toMatch("Z");
});

test("Multiple lowercase characters", () => {
  expect(ceaserCipher("abc", 2)).toMatch("cde");
});

test("Multiple uppercase characters", () => {
  expect(ceaserCipher("PGJBJ", 7)).toMatch("WNQIQ");
});

test("Wrapping characters", () => {
  expect(ceaserCipher("xyz", 3)).toMatch("abc");
});

test("Case preservation", () => {
  expect(ceaserCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("Non-alphabetic characters", () => {
  expect(ceaserCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});
