class Account{
    acc_id;
    acc_name;
    acc_Amount;
    constructor(id,name,amount)
    {
        this.acc_id=id;
        this.acc_name=name;
        this.acc_Amount=amount;
    }

    get_bal()
    {
        return this.acc_Amount;
    
    }
}
let a1=new Account(101,"manasa",1500)
console.log(a1);
console.log(a1.get_bal());
