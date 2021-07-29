// 模拟实现setinterval
function mySettimeout (fn, t) {
  let timer = null // 重置时间
  function interval () {
    fn()
    timer = setTimeout(interval, t)
  }
  interval()
  return {
    cacel: () => {
      clearTimeout(timer)
    }
  }
}