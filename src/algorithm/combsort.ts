import {defaultComparetor} from '../default-comparetor';

/**
 * コムソート
 * O(n log n) / n / 不安定
 * @param array 配列
 * @param comparetor 比較関数
 */
export function sort<T>(array: T[], comparetor?: (l: T, r: T) => number): T[]
{
  const f = comparetor || defaultComparetor;

  const result = Array.from(array);

  let h = Math.floor(result.length * 10 / 13);
  while (true) {
    let isSwap = false;
    const count = result.length - h;
    for (let i = 0; i < count; ++i) {
      const j = i + h;
      const c = f(result[i], result[j]);
      if (c > 0) {
        [result[i], result[j]] = [result[j], result[i]];
        isSwap = true;
      }
    }
    if (h !== 1) {
      h = Math.floor(h * 10 / 13);
    } else if (!isSwap) {
      break;
    }
  }
  return result;
}
