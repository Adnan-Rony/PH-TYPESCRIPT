{
  // abstraction---->1.interface 2.abstract
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // object--
  // const vehicle1:Vehicle1={
  //     name:'BMW',
  //     model:'120XSD'
  // }

  // class--used implements
  // real implements
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(` i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stoping the car engine`);
    }
    move(): void {
      console.log(`i am moving the the car`);
    }
    test() {
      console.log(`i am just testing`);
    }
  }

  const Toyota = new Car1();
  Toyota.startEngine();

  // abstract class used

  //
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log(`i am starting the car engine`)
    }
    stopEngine(): void {
        console.log(`i am stop the car engine`)
    }
    move(): void {
        console.log(`i am move the car engine`)
    }
  }

  const Honda = new Car2();
  Honda.startEngine();
}
