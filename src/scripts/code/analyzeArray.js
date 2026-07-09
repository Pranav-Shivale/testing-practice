const analyzeArray = (arr) => {
  const length = arr.length;

  if (arr.length < 1) {
    throw new Error("Empty array.");
  }

  const average = arr.reduce((sum, curr) => sum + curr, 0) / length;

  const min = arr.reduce((minValue, curr) =>
    minValue > curr ? curr : minValue,
  );

  const max = arr.reduce((maxValue, curr) =>
    maxValue < curr ? curr : maxValue,
  );

  return {
    average,
    min,
    max,
    length,
  };
};

export { analyzeArray };
