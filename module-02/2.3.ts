{

    // generic type

    type GenericArray<param>=Array<param>


    // const rollNumber:number[]=[1,2,3]
    // const rollNumber:Array<number>=[1,2,3]

    const rollNumber:GenericArray<number>=[1,2,3]


    const name:GenericArray<string>=['adnan','rony']


    const boollArray:GenericArray<boolean>=[true,false,true]



const user:GenericArray<{name:string,age:number}> =[
    {
        name:"adnan",
        age:200
    },
    {
        name:"rony",
        age:300
    }
]

// interface used




// generic tuple

type GenericTuple<X,Y> =[X,Y]

const Manush :GenericTuple<String,String>=['Adnan',"janu"]

const Userid:GenericTuple<number,{name:string,email:string}>=[5155,{name:"adnan",email:"a@gmail.com"}]


console.log(Userid)

















}