const _ = require("lodash");

const oldArr = [1, [2, 3, [4, 5, [6, 7]]]];

const newArr = _.flattenDeep(oldArr);

console.log(newArr);
