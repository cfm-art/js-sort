import { sort } from '../algorithm/bubblesort';

(Array.prototype as any).sortBy = function sortBy(comparetor) {
    return sort(this, comparetor);
};
