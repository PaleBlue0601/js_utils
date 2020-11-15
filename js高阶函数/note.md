# js高阶函数

### 1.函数柯里化
  *  函数柯里化作用
    1. 参数复用
    2. 延迟计算/运行 
  * 代码：
    ```
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
    ```

### 2.组合函数
  *  在项目开发过程中，为了实现函数的复用，我们通常会尽量保证函数的职责单一，比如我们定义了以下功能函数：
  * 在拥有以上功能函数的基础上，我们就可以自由地对函数进行组合，来实现特定的功能：
  * 代码：
    ```
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
    ```

### 2.组合函数
  *  偏函数应用是固定一个函数的一个或多个参数，并返回一个可以接收剩余参数的函数；
  * 柯里化是将函数转化为多个嵌套的一元函数，也就是每个函数只接收一个参数。
  * 代码：
    ```
    // 扁平化函数转换方法
    function partial(fn) {
      let args = [].slice.call(arguments, 1);
      return function () {
        const newArgs = args.concat([].slice.call(arguments))
        return fn.apply(this, newArgs)
      }
    }

    function buildUri(scheme, domain, path) {
      return `${scheme}://${domain}/${path}`;
    }
    const myGithubPath = partial(buildUri, "https", "github.com");
    const profilePath = myGithubPath("WHBhorse");
    const awesomeTsPath = myGithubPath("WHBhorse/html-css-js");
    ```