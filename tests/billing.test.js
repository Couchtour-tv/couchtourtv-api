import { calculateCost } from "../libs/billing-lib";

test("Price Equals", () => {
  const storage = 10;

  const cost = 10;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});


