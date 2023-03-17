// 1.
const _ = require("lodash");
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4];
// console.log(_.difference(arr1, arr2));

// 2, 3
let products = [
  { product: "banana", hasGMO: true },
  { product: "apple", hasGMO: false },
  { product: "orange", hasGMO: false },
];

// _.map(products, (hehe) => {
//   if (hehe.hasGMO === false) {
//     console.log(hehe.product);
//   }
// });

// _.map(products, (hehe) => {
//   if (hehe.hasGMO === true) {
//     console.log(hehe.product);
//   }
// });

// 4
let numbers = [1, 2, 3];

// _.map(numbers, (haha) => {
//   if (haha != 0) {
//     haha = 0;
//     console.log(haha);
//   }
// });

// 5
let array5 = [1, 2, 3];
let array52 = [1, 3, 5];

_.intersectionWith(array5, array52, _.isEqual);
console.log();
