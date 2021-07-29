let arr = [1,[7,8]]

// 利用flat
const res1 = arr.flat();

// 利用正则
// const res2 = JSON.parse('['+JSON.stringify(arr.replace('正则表达式', '')) +']')

//利用reduce
const flatten = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
const res3 = flatten(arr)

// 利用递归
const res5 = []
const fn = arr => {
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      fn(arr[i])
    } else {
      res5.push(arr[i])
    }
  }
}
fn(arr)
console.log(res1, res3, res5)