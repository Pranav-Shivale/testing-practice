const capitalize = (str) => {
  if (typeof str !== "string") {
    throw new Error("Invalid datatype.");
  }
  if (str === "") return "";
  return str[0].toUpperCase() + str.slice(1, str.length);
};

export { capitalize };
