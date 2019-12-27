import {defaultComparetor} from '../default-comparetor';

/**
 * バブルソート
 * O(n^2) / n / 安定
 * @param array 配列
 * @param comparetor 比較関数
 */
export function sort<T>(array: T[], comparetor?: (l: T, r: T) => number): T[]
{
  const f = comparetor || defaultComparetor;

  const result = Array.from(array);

  for (let i = 0; i < result.length; ++i) {
    for (let j = i + 1; j < result.length; ++j) {
        const c = f(result[i], result[j]);
        if (c > 0) {
            [result[i], result[j]] = [result[j], result[i]];
        }
    }
  }
  return result;
}
