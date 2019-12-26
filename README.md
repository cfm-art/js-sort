js-sort
==

JavaScript用の各種ソートアルゴリズムの実装。

## usage

```ts
import { sort } from 'cfm-js-sort';

const someArray = [2, 3, 1];
const sortedArray = sort.bubblesort(someArray);

console.log(someArray);     // keep: [2, 3, 1]
console.log(sortedArray);   // sort: [1, 2, 3]
```
