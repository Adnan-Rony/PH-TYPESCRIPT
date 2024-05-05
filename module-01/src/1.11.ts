{
// 



const age:number=20;

if (age>18)
    {
        console.log("adult")
    }
    else{
        console.log("not adult")
    }

    const isadult=age >=18 ?"adult" : "not adult";
    // console.log({isadult})


    // nullish coalescing operator

    const isadmin=null;
    const resut=isadmin ?? "guest";
    const resut2=isadmin ? isadmin: "guest";
    console.log({resut},{resut2})



    type User={
        name:string;
        address:{
            city: string;
            road:string;
            presentaddress:string;
            permanentaddress ?:string;

        }
    }

    const user:User={
        name:"adnan",
        address:{
            city:"dhaka",
            road:"dotto",
            presentaddress:"dhanmondi",
            // permanentaddress:"khagan"
        }
    }

    const permanentaddress=user?.address?.permanentaddress ?? "no permanent address"
    console.log({permanentaddress})








}