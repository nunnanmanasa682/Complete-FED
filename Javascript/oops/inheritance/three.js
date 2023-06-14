class Account{
    constructor(name,email){
    this.acc_name=name;
    this.acc_email=email;
}
}
class saving_Account extends Account{
    constructor(id,name,email,amount){
        super(name,email);
        this.acc_id=id;
        this.acc_amount=amount
    }
}
let a1=new saving_Account(101,"manasa","nunn@gamil.com",20000)
console.log(a1)
