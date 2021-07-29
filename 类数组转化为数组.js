// Array.prototype.reduce = function(callback, initalValue) {
//   if (this == undefined) {
//     throw new TypeError('this is null or not defined')
//   }
//   if (typeof callback != 'function') {
//     throw new TypeError(callbackfn + 'is not a function')
//   }
//   const O = Object(this)
//   const len = this.length >>> 0
//   let accumulator = initalValue
//   let k = 0
//   if (accumulator === undefined) {

//   }
// }



Array.prototype.map = function (callback, thisArg) {
  if (this === undefined) {
    throw new TypeError ('this is null or not defined')
  }
  if (typeof callback !== 'function') {
    throw new TypeError (callback + 'is not a function')
  }
  const res = []

  const O = Object(this)
  const len = O.length >>> 0
  for (let i = 0; i<len;i++) {
    if (i in O) {
      res[i] = callback.call(thisArg, O[i], i, this)
    }
  }
  return res
}

Function.prototype.call = function(context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('type error')
  }
  const fn = Symbol('fn')
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}


Function.prototype.bind = function(context = window, ...args) {
  // 类型错误
  if (typeof this !== 'function') {
    throw new TypeError('type error')
  }
  var self = this
  return function F (){
    if (this instanceof F) {
      return new self(...args, ...arguments)
    }
    return self.apply(context, [...args, ...arguments])
  }
}






function Product (name, price) {
  this.name = name
  this.price = price
}
function Food (name, price) {
  Product.call(this,name,price)
  this.category = 'food'
}