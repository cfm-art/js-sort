"use strict";
exports.__esModule = true;
var default_comparetor_1 = require("../default-comparetor");
/**
 * バブルソート
 * O(n^2) / n / 安定
 * @param array 配列
 * @param comparetor 比較関数
 */
function sort(array, comparetor) {
    var _a;
    var f = comparetor || default_comparetor_1.defaultComparetor;
    var result = Array.from(array);
    for (var i = 1; i < result.length; ++i) {
        for (var j = 1; j <= result.length - i; ++i) {
            var c = f(result[i], result[j]);
            if (c < 0) {
                _a = [result[j], result[i]], result[i] = _a[0], result[j] = _a[1];
            }
        }
    }
    return result;
}
exports.sort = sort;
