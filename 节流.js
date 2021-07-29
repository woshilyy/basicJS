const throttle = (fn, time) => {
  let flag = true
  return function() {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, time);
  }
}

// 高频触发只执行一次
const throttle = (fn, time) => {
  let flag = true
  return function () {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, time);
  }
}