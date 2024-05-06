{
    // mapping types
    const arrofNumbers:number[]=[1,2,3,4]

    const arrofString:string[]=arrofNumbers.map(number=>number.toString())

    console.log(arrofString)

type AreaNumber={
    hright:number;
    width:number
}



type AreaString={
    // [key in "height" | "width"]:string
    [key in keyof AreaNumber]:string
}











}