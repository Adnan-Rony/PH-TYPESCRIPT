
function add(num1:number,num2:number){
    return num1+num2
}
add(2,3)

const addarrow=(num1:number,num2:number)=>{
    num1+num2
}

// object--function-->method 
const poorUser={
    name:"adnan",
    balance:0,
    addBalance(balance:number){
        return this.balance+balance
    }
}