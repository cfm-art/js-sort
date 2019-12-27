import {defaultComparetor} from '../default-comparetor';

/**
 * 挿入ソート
 * O(n) / n / 不安定
 * @param array 配列
 * @param comparetor 比較関数
 */
export function sort<T>(array: T[], comparetor?: (l: T, r: T) => number): T[]
{
  const f = comparetor || defaultComparetor;

  const result = Array.from({length: array.length}) as T[];

  if (array.length > 0) { result[0] = array[0]; }

  for (let i = 1; i < result.length; ++i) {
    result[i] = array[i];
    for (let j = i - 1; j >= 0; --j) {
      const c = f(result[j], array[i]);
      if (c > 0) {
        for (let k = j + 1; k < i; ++k) {
          result[k] = result[k - 1];
        }
        result[j] = array[i];
        break;
      }
    }
  }
  return result;
}
