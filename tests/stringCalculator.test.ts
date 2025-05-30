import { add } from '../src/stringCalculator';

test('should return 0 for empty string', () => {
  expect(add("")).toBe(0);
});