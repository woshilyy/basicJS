class Scheduler {
  constructor(limit) {
    this.queue = []
    this.maxCount = limit
    this.runCounts = 0
  }
  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resove,reject) => {
        setTimeout(() => {
          console.log(order);
          resove()
        }, time)
      })
    }
    this.queue.push(promiseCreator)
  }
  taskStart() {
    for (let i =0 ;i<this.maxCount; i++) {
      this.request()
    }
  }
  request () {
    if(!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
      return
    }
    this.runCounts ++ ;
    this.queue
    .shift()().then(() => {
      this.runCounts --;
      this.request()
    })
  }
}