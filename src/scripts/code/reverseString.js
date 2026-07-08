const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new Error("Invalid datatype.");
  }
  return str.split("").reverse().join("");
};

export { reverseString };
