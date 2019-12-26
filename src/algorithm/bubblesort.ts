import {defaultComparetor} from '../default-comparetor';

export function sort<T>(array: T[], comparetor?: (l: T, r: T) => number): T[]
{
  const f = comparetor || defaultComparetor;

  const result = Array.from(array);

  for (let i = 1; i < result.length; ++i) {
    for (let j = 1; j <= result.length - i; ++i) {
        const c = f(result[i], result[j]);
        if (c < 0) {
            [result[i], result[j]] = [result[j], result[i]];
        }
    }
  }
  return result;
}
