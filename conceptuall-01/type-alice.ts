type StringOrNumber=string | number;
type user={name:String,age:number}

const userdetails=(
    id:StringOrNumber,
    user:user
)=>{
    console.log(`user id is ${id} ,name is ${user.name} and age is ${user.age}`)
}
userdetails(20,{name:'adnan',age:30})