import { sum } from "../src/sum.js";

test("sum", () => {
  expect(sum(0, 0)).toBe(0);
  expect(sum(2, 1)).toBe(3);
  expect(sum(-2, -1)).toBe(-3);
});
