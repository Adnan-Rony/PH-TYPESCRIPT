{

//    unknown type

const getspreedinmeterpersecond=(value:unknown)=>{
    if(typeof value === "number"){
        const convertedvalue=(value*1000)/3600
        console.log(`the speed is ${convertedvalue} ms-1`)
    }
    if(typeof value === "string"){
       const [mainvalue,unit]=value.split(' ')
       const convertedvalue=(parseFloat(mainvalue)*1000)/3600
       console.log(`the speed is ${convertedvalue} ms-1`)
    }
    else{
        console.log("wrong input")
    }
}
// getspreedinmeterpersecond('1000 kmh-1')
getspreedinmeterpersecond(null)




// never typeof

const throwError=(message:string):never=>{
    throw new Error (message)
}
throwError("error hoye gese")







}