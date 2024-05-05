{
// interface 

type User1 ={
    name:string;
    age:number
}
type Userwithroll=User1 & {role:string}

const usertype:Userwithroll={
    name:"adnan",
    age:100,
    role:"admin"
}



interface User2{
    name:string;
    age:number
}


interface Userwithrolll2 extends User2 {
    role:string
}



const usertypeinterface:Userwithrolll2={
    name:"adnan",
    age:100,
    role:"admin"
}



const user:User2={
    name:"adnan",
    age:100
}

// console.log({user})


// js--object,arry--object function--object

type Roll1=number[];

interface Roll2 {
    [index:number]:number
}

const rooNumber1 :Roll2=[1,2,3,4,5,6]

console.log(rooNumber1)


// function

type AddSum=(num1:number,num2:number)=>number

interface AddSum2 {
   ( num1:number,
    num2:number):number
}

const add :AddSum2 = (num1,num2)=> num1+num2



console.log(add(22,3))











}