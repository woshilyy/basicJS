function newOperator(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw new TypeError('type error')
  }
  const obj = Object.create(ctor.prototype) // 以ctor.prototype为原型创建一个对象
  const res = ctor.apply(obj, args)
  const isObject = typeof res === 'object' && res !== null
  const isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}