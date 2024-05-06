{
// oop-inheritance

class Parent{
    name:string;
    age:number;
    address:string;

    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }

    getSleep(numberofHours:number){
        console.log(`${this.name } will sleep for ${numberofHours}`)
    }
}

class Student extends Parent{

    constructor(name:string,age:number,address:string){
       super(name,age,address)
    }

    getSleep(numberofHours:number){
        console.log(`${this.name } will sleep for ${numberofHours}`)
    }

}
const student01=new Student('adnan',20,'dhaka')


// teacher
class Teacher extends Parent{
  
    position:string

    constructor(name:string,age:number,address:string,position:string){
       super(name,age,address)
        this.position=position
    }

    
    takeclass(numberofclass:number){
        console.log(`${this.name} will take class ${numberofclass}`)
    }

    

}
const Teacher01=new Teacher('adnan',20,'dhaka','professor')






// 

}