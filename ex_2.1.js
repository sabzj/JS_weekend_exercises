
// Sum of lowest numbers

const numbers = [19, 5, 42, 2, 77]
function sumArray (numbers){

    let sum =0;
    for (let i = 0; i < numbers.length; i++){
        // for (let j=0; j< numbers.length[i]; j++)
        sum += numbers[i]
    }
    return sum;
}
const total = sumArray(numbers)
console.log(total)