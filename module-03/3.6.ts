{
  // geeter and dsetter
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

    //   seeter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    //   geeter
    get Balance() {
      return this._balance;
    }
  }

  const GoribManushAccount = new BankAccount(100, "adnan", 200);

  GoribManushAccount.deposit = 100;

  const myBalance = GoribManushAccount.Balance;

  console.log(myBalance);

  //
  class StudentAccount extends BankAccount {
    test() {
      this._balance = this._balance;
    }
  }

  //
}
