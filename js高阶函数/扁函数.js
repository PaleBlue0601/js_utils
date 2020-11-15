/**
 * 偏函数应用
 * 偏函数应用是固定一个函数的一个或多个参数，并返回一个可以接收剩余参数的函数；
 * 柯里化是将函数转化为多个嵌套的一元函数，也就是每个函数只接收一个参数。
 */


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


