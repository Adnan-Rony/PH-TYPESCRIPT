{
  // type assertion

  let anything: any;
  anything = "next level web devolopment";

  anything = 111;
  // (anything as number)

  const kgtoGm = (value: string | number):string | number |undefined => {
    if (typeof value === "string") {
      const convertvalue = parseFloat(value)*1000;
      return `the converted value is ${convertvalue}`;
    }
    if(typeof value==="number"){
        return value *1000;
    }
  };


const result1=kgtoGm(100) as number
const result2=kgtoGm("100") as string




// error
type CustomError={
    message:string
}

try {

}
catch(error){
    console.log((error as CustomError).message)
}


}
