{
    // access modifier
        class BankAccount{
           public id:number;
          public readonly  name:string;
           private balance:number


            constructor(id:number,name:string,balance:number){
                this.id=id;
                this.name=name;
                this.balance=balance;
            }
            addDeposit(amount:number){
                this.balance=this.balance+amount
            }
        }

      const GoribManushAccount=new BankAccount(100,"adnan",200);
      GoribManushAccount.addDeposit(300)

console.log(GoribManushAccount)


    // 
}