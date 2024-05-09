
{
    // // //1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.
    
const sumArray=(number:number[]):number=>{
    let sum=0;
    for (let num of number){
        sum=sum+num
    }

    return sum;


    
}

const number=[1,2,3,4];
const result=sumArray(number);
console.log(result)







}