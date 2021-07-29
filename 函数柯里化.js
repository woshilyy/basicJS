function add () {
  // 将一个接受多个参数的函数改变为接收一个参数返回一个函数的固定形式
  const __args = [...arguments]
  function fn () {
    __args.push(...arguments)
    return fn
  }
  fn.toString = function () {
    return __args.reduce((sum, cur) => sum + cur)
  }
  return fn
}


function add () {
  const _args = [...arguments]
  // 多个参数转成一个参数
  function fn () {
    _args.push(...arguments)
    return fn
  }
  fn.toString = function () {
    return _args.reduce((sum, cur) => sum + cur)
  }
  return fn
}