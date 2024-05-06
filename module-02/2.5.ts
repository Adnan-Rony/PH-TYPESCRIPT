{
// function with generics

const createarray=(param:string):string[]=>{
    return [param]
}


const createarraywithGenericsTuple =<T,Q>(param1:T,param2:Q):[T,Q]=>{
    return [param1,param2]
}

const result1=createarray("bangladesh")
const result2=createarraywithGenericsTuple<string,number>("adu",22)

console.log(result2)



















}