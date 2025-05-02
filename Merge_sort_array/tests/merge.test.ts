import { merge } from "../src/merge";

describe("merge()", () => {
  it("ควรรวมและเรียงค่าจาก 3 อาร์เรย์อย่างถูกต้อง", () => {
    const result = merge([9, 7, 5], [1, 3, 4], [2, 6, 8]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("ควรทำงานถูกต้องเมื่อมีอาร์เรย์ว่าง", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([], [1, 2], [])).toEqual([1, 2]);
    expect(merge([5, 3], [], [])).toEqual([3, 5]);
  });

  it("ควรรวมค่าที่ซ้ำกันได้", () => {
    const result = merge([5, 3, 3], [1, 3], [3, 4]);
    expect(result).toEqual([1, 3, 3, 3, 3, 4, 5]);
  });

  it("ควรทำงานกับค่าลบได้", () => {
    const result = merge([-1, -3, -5], [-4, 0], [-2, -6]);
    expect(result).toEqual([-6, -5, -4, -3, -2, -1, 0]);
  });
});
