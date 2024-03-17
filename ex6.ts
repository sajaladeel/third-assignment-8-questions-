// remove negative numbers
function removeNegNos(numbers:number[]):number[]{
    return numbers.filter(number =>number>=0);
}

const numbers = [7,8,9,-5,2,-6,3,2,-9];
const result=
removeNegNos(numbers);
console.log(result);