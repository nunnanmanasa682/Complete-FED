class Account{
    min_bal=500;
    amount;
    open_Account(){
        console.log("open account");
    }
    deposit_Amount(a1){
        console.log("amount deposit");
        this.amount=a1;
    }
    get_bal(){
        return this.amount+this.min_bal;
    }
}
let a1=new Account();
a1.open_Account();
a1.deposit_Amount(1500)
console.log(a1.get_bal());