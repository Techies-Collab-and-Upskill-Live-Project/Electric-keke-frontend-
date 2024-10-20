export const comparison = (param1, param2, comparisonType) => {
  switch (comparisonType) {
    case "isGreater":
      return param1 > param2;
    case "isGreaterOrEqual":
      return param1 >= param2;
    default:
      return param1 === param2;
  }
};
