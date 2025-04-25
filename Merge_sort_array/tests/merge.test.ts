import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge and sort arrays correctly", () => {
    const result = merge([9, 7, 5], [1, 3, 4], [2, 6, 8]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should work with empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([], [1, 2], [3])).toEqual([1, 2, 3]);
    expect(merge([5, 3], [], [1])).toEqual([1, 3, 5]);
  });

  it("should handle duplicates", () => {
    const result = merge([5, 3, 3], [1, 3], [3, 4]);
    expect(result).toEqual([1, 3, 3, 3, 3, 4, 5]);
  });
});
