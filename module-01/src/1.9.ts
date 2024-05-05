{





    type User={
        name:string;
        address:{
            city: string;
            road:string;
            presentaddress:string;
            permanentaddress ?:string;

        }
    }


    const userStudent:User={
        name:"adnan",
        address:{
            city:"dhaka",
            road:"dotto",
            presentaddress:"dhanmondi",
            // permanentaddress:"khagan"
        }
    }

    console.log(userStudent.name)



}