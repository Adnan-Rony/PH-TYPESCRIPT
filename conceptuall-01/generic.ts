{

    // type GenericArray=Array<number>

    type GenericArray<T>=Array<T>


    // const rolNumber:number[]=[1,2,3,4]

    // const rolNumber:Array<number>=[1,2,3,4]

    // const rolNumber:GenericArray=[1,2,3,4]

    const rolNumber:GenericArray<number>=[1,2,3,4]

    const Names:GenericArray<string>=['a','b','c']



    const user:GenericArray<{name:string,age:number}> =[
        {
           name:'adnan',
           age:20 
        },
        {
           name:'rony',
           age:207
        },
    ]
    type GenericTuple<X,Y>=[X,Y]

    const manus:GenericTuple<string,string>=["adnan","rony"]

    console.log(manus)








}