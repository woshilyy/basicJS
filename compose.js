function compose(...fn) {
  if (!fn.length) return
  if (fn.length === 1) return fn[0]
  return fn.reduce((pre, cur) => {
    (...args) => {
      pre(cur(...args))
    }
  })
}
