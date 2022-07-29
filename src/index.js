
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = (matrix);
  const res = [];
  
  if (arr === undefined) {
    return [];
  }
  for (let i=0; i<arr.length; i++) {
    if (i % 2 !== 0 && i !==0) {
       arr[i].reverse();
    } 
  }

  const resArr = function (arr) {
    for (let i=0; i<arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        resArr(arr[i])
      } else {
        res.push(arr[i])
      }
    }
  }
  resArr(arr)
  return res;
}
