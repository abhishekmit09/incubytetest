import { add } from '../src/stringCalculator';

// test('should return 0 for empty string', () => {
//   expect(add("")).toBe(0);
// });

test('should return the number itself for a single number input', () => {
  expect(add("1")).toBe(1);
});


test('should return the sum of two comma-separated numbers', () => {
  expect(add("1,5")).toBe(6);
});


test('should handle new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});


test('should support custom delimiter specified at the beginning', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('should throw an error if negative numbers are provided', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
});
