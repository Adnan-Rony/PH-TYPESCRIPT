{

    type something={something:string}

    const createPromise=():Promise<something>=>{

        return new Promise <something>((resolve,reject)=>{
            const data:something={something:"something"};
            if(data){
                resolve(data)
            }
            else{
                reject("something is wrong")
            }
        })
    }


    // calling the promise function
    const ShowData=async():Promise<something>=>{
        const data:something=await createPromise();
        // console.log(data)
        return data
    }
    ShowData()
}