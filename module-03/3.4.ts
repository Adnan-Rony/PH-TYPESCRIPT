{
    // instanceof Guard

    class Animal{
        name:string;

        species:string;

        constructor(name:string,species:string){
            this.name=name;
            this.species=species
        }


        makesound(){
            console.log('i am making sound ')
        }
    }


    class Dog extends Animal{
            constructor(name:string,species:string){
                super(name,species)
            }
            makeBark(){
                console.log("i am barking")
            }
    }

    class Cat extends Animal{
            constructor(name:string,species:string){
                super(name,species)
            }
            makeMeaw(){
                console.log("i am mew mew")
            }
    }

    const dog=new Dog("Dogy vai","dog")
    const cat=new Cat("Cat vai","cat")

    


    // 
}