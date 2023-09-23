

// findUniq

// const array = [ 1, 1, 1, 2, 1, 1, ]
// for (let i = 0; i < a.length-1; i++)
//     if(a[i] != a[i+1]);

// console.log(a[i]);

// const array = [ 1, 1, 1, 2, 1, 1, ]
// const findUniq = array.filter(
//     function(currE,index,arr){
//         return arr.indexOf(currE)===index;
//     })
//     console.log(currE)

const array = [ 1, 1, 1, 2, 1, 1, ]
function findUniq(arr) {
    let myset = new Set(arr)
    let count = 0
    let arr2 = [...myset]
    for(let i = 0; i < 4; i++) {
      if(arr[i] == arr2[0]) {
        count++
      }
    }
    return (count == 1) ? arr2[0] : arr2[1]
  }