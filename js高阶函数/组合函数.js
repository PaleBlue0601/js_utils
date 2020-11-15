/**
 * 在项目开发过程中，为了实现函数的复用，我们通常会尽量保证函数的职责单一，比如我们定义了以下功能函数：
 * 在拥有以上功能函数的基础上，我们就可以自由地对函数进行组合，来实现特定的功能：
 */

// 组合函数实现方法
function compose(...funcs) {
  return function (x) {
    return funcs.reduce(function (arg, fn) {
      return fn(arg);
    }, x);
  };
}

function lowerCase(input) {
  return input && typeof input === "string" ? input.toLowerCase() : input;
}

function trim(input) {
  return typeof input === "string" ? input.trim() : input;
}

function split(input, delimiter = ",") {
  return typeof input === "string" ? input.split(delimiter) : input;
}

const trimLowerCaseAndSplit = compose(trim, lowerCase, split);
trimLowerCaseAndSplit(" a,B,C "); // ["a", "b", "c"]
