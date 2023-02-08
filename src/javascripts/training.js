//関数化
// const result = (a, b) => {
//   return (a + b) * (a + b);
// };

// console.log(result(2, 3));

//何象限か選定
// const quadrant = (x, y) => {
//   let result = x * y;
//   if (result > 0) {
//     if (x > 0) {
//       console.log("第一象限");
//     } else {
//       console.log("第三象限");
//     }
//   } else if (result < 0) {
//     if (x < 0) {
//       console.log("第二象限");
//     } else {
//       console.log("第四象限");
//     }
//   } else {
//     console.log("その他");
//   }
// };

//2倍を格納
// let element = new Array();
// for (let i = 0; i < 10; i++) {
//   element[i] = i + 1;
// }
// console.log(element);
// for (let i = 0; i < 10; i++) {
//   element[i] = element[i] * element[i];
// }
// console.log(element);

//課題
// const commonMultiple = (a, b) => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % a == 0 && i % b == 0) {
//       console.log(i);
//     }
//   }
// };

// commonMultiple(2, 5);

//20230128
//課題1

//課題2
let items = [
  ["カロリーメイト", 158, 1],
  ["一本満足バー", 128, 1],
  ["モンスター", 200, 5],
];
let total = 0;

for (let i = 0; i < items.length; i++) {
  console.log(items[i][0], items[i][1], items[i][2]);
  total += items[i][1] * items[i][2];
}
console.log("合計" + total + "円");
