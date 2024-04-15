import { sum } from "../src/sum";

describe("Math functions", () => {
  it("should sum two numbers correctly", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});