{
  // polymorphisom

  class Person {
    getSleep() {
      console.log(`i am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`i am sleeping for 4 hours per day`);
    }
  }

  class Devoloper extends Person {
    getSleep() {
      console.log(`i am sleeping for 2 hours per day`);
    }
  }

  const getSleepHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Devoloper();

  getSleepHours(person2);



  // new
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // pi *r*r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
        return Math.PI *this.radius* this.radius
    }
  }


//   Ractangle--->height and width

class Ractangle extends Shape {
    height: number;
    width: number;
    constructor(height: number,width:number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
        return this.height * this.width
    }
  }


  const getShapeArea=(param:Shape)=>{
    console.log(param.getArea())
  }



  const shape1=new Shape();
  const shape2=new Circle(5);
  const shape3=new Ractangle(5,5);



getShapeArea(shape1)
getShapeArea(shape2)
getShapeArea(shape3)












}
