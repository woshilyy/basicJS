const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', true,false,true, {}, {}];

// set

const res1 = Array.from(new Set(arr))


// indexof
const unique2 = arr => {
  const res = []
  res = arr.map(i => {
    
  })
}


// const unique1 = arr => {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//         // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
//         len--;
//         j--;
//       }
//     }
//   }
//   return arr;
// }

// const unique3 = arr => {
//   const res = []
//   arr.forEach(element => {
//       if (!res.includes(element)) res.push(element)
//   })
//   return res
// }

// const unique4 = arr => {
//   return arr.filter((item, index) => {
//     return arr.indexOf(item) === index
//   })
// }

const unique5 = arr => {
  const map = new Map()
  const res = []
  for(let i = 0; i< arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i])
    }
  }
  return res
}

console.log(unique4(arr))