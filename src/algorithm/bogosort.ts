import {defaultComparetor} from '../default-comparetor';

function isSorted<T>(array: T[], comparetor: (l: T, r: T) => number): boolean
{
  for (let i = 1; i < array.length; ++i) {
    if (comparetor(array[i - 1], array[i]) > 0) {
      return false;
    }
  }
  return true;
}

/**
 * ボゴソート
 * O(n・n!) / n / 不安定
 * @param array 配列
 * @param comparetor 比較関数
 */
export function sort<T>(array: T[], comparetor?: (l: T, r: T) => number): T[]
{
  const f = comparetor || defaultComparetor;

  const result = Array.from(array);

  while(!isSorted(result, f)) {
    const h = result.length >> 1;
    for (let i = 0; i < h; ++i) {
      const left = Math.floor(Math.random() * result.length);
      const right = Math.floor(Math.random() * result.length);
      [result[left], result[right]] = [result[right], result[left]];
    }
  }
  return result;
}
