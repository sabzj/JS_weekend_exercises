
// summation(8) -> 36

1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }