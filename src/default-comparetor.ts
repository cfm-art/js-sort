export function defaultComparetor(l: unknown, r: unknown): number
{
  return l > r
    ? 1
    : l < r
      ? -1
      : 0;
}
