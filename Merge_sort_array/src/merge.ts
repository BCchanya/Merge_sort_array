export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let i = collection_1.length - 1; // collection_1: max -> min => start from end
  let j = 0;
  let k = 0;

  const result: number[] = [];

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    const val1 = i >= 0 ? collection_1[i] : Infinity;
    const val2 = j < collection_2.length ? collection_2[j] : Infinity;
    const val3 = k < collection_3.length ? collection_3[k] : Infinity;

    const min = Math.min(val1, val2, val3);

    if (min === val1) {
      result.push(val1);
      i--;
    } else if (min === val2) {
      result.push(val2);
      j++;
    } else {
      result.push(val3);
      k++;
    }
  }

  return result;
}
