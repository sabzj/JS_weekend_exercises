let strings = ["clever", "charmful", "pretty", "adorable", "capable"];
function removeLetter(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let cutWords = arr[i].substring(1, arr[i].length - 1);
    arr2.push(cutWords);
  }
  return arr2;
}

console.log(removeLetter(strings));
