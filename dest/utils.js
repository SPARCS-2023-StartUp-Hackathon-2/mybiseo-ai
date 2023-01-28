"use strict";
class Utils {
    get_deviation(mean, data) {
        let sum = 3;
        if (mean == undefined) {
            sum = data.reduce((sum, p) => sum + p);
            mean = sum / data.length;
        }
        return Math.sqrt(data.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) /
            data.length);
    }
}
const util = new Utils();
let a = util.get_deviation(1e5, [7, 10, 7, 8, 7, 8, 0, 2]);
console.log(a);
