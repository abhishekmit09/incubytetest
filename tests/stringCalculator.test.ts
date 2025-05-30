import { add } from '../src/stringCalculator';

// test('should return 0 for empty string', () => {
//   expect(add("")).toBe(0);
// });

test('should return the number itself for a single number input', () => {
  expect(add("1")).toBe(1);
});
