{
  // access modifier
  class BankAccount {
    public id: number;
    public readonly name: string;
    //    private _balance:number
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const GoribManushAccount = new BankAccount(100, "adnan", 200);
  GoribManushAccount.addDeposit(500);

  console.log(GoribManushAccount);


//   
class StudentAccount extends BankAccount{
    test(){
        this._balance=this._balance
    }
}

  //
}
