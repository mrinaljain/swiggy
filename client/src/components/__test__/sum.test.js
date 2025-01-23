import { sum } from "../sum";

test("sum should be equal", () => {
  let result = sum(4, 6);
  // Assertions
  expect(result).toBe(10);
});
