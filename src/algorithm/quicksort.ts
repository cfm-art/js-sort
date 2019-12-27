import {defaultComparetor} from '../default-comparetor';

function qsort<T>(array: T[], left: number, right: number, comparetor: (l: T, r: T) => number)
{
  if (left < right) {
    let i = left;
    let j = right;
    const pivot = array[i];
    while (true) {
      // 左にpivotより小さいものを集める
      // 右にpivotより大きいものを集める
      while (comparetor(array[i], pivot) < 0) { i++ };
      while (comparetor(pivot, array[j]) < 0) { j-- };
      if (i >= j) { break; }
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
    qsort(array, left, i - 1, comparetor);
    qsort(array, j + 1, right, comparetor);
  }
}

/**
 * クイックソート
 * O(n log n) / 2n / 不安定
 * @param array 配列
 * @param comparetor 比較関数
 */
export function sort<T>(array: T[], comparetor?: (l: T, r: T) => number): T[]
{
  const f = comparetor || defaultComparetor;
  const result = Array.from(array);
  qsort(array, 0, array.length - 1, f);
  return result;
}
