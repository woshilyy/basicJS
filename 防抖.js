const debounce = (fn, time) => {
  let timeout = null
  return function() {
    clearTimeout(timeout) // 重新计算时间
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, time);
  }
}


const debounce = (fn, time) => {
  const timeOut = null
  return function() {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      fn.apply(this,arguments)
    }, time);
  }
}