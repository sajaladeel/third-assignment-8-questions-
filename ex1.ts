// function that takes an array, an index and value as parameters..inside function use splice method

function insertValue(array:any[],index:
    number,value:any):any{
array.splice(index,0,value);
}
const array1=[1,2,3,3,4,5,5]
const modifiedArray = insertValue(array1,2,9);
console.log(modifiedArray);