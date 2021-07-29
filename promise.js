const PENDING = 'pending'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(exector) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulFilledCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = value => {
      // 只有 进行中状态才能更改状态
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value
        this.onFulFilledCallbacks.forEach(fn => fn(this.value))
      }
    }
    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try {
      exector(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected :
    reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    }
    const self = this
    return new Promise((resolve, reject) => {
      if (self.satus === PENDING) {
        self.onFulFilledCallbacks.push(()=> {
          try{
            setTimeout(() => {
             const reslut = onFulfilled(self.value) 
             reslut instanceof Promise ? reslut.then(resolve, reject) : resolve(reslut)
            });
          } catch(e) {
            reject(e)
          }
        })
      }
    })
  }

}