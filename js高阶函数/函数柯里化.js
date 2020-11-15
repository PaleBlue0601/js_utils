/**
 * 函数柯里化作用
 * 1 参数复用
 * 2 延迟计算/运行
 */

// 实现函数柯里化
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) { // 通过函数的length属性，来获取函数的形参个数
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  }
}
//1 参数复用
const _ = require("lodash");

const buildUriCurry = curry(buildUri);
const myGithubPath = buildUriCurry("https", "github.com");
const profilePath = myGithubPath("WHBhorse");
const awesomeTsPath = myGithubPath("WHBhorse/html-css-js");


//2 延迟计算/运行
const add = function (a, b) {
  return a + b;
};

const curried = curry(add);
const plusOne = curried(1);

const abc = function(a, b, c) {
  return [a, b, c];
};
 
const curried = curry(abc);
 
let ret1 = curried(1)(2)(3); // => [1, 2, 3]
let ret2 = curried(1, 2)(3); // => [1, 2, 3]
let ret3 = curried(1, 2, 3); // => [1, 2, 3]

console.dir(ret1)
console.dir(ret2)
console.dir(ret3)