class Account{
    min_bal=500;
open_acc()
{
    console.log("Account open successfully");
}

deposit_Amount()
{
    console.log("amount credited");
}
get_statement()
{
console.log("successfully credited");
}
get_Bal()
{
    console.log("insuffecient balance");
}
withdrawing_Amount()
{
console.log("you don't have banlance");
}
close_Account()
{
    console.log("close the account");
}
}
let c1=new Account();

//console.log(c1);
console.log(c1.min_bal);
c1.open_acc();
c1.deposit_Amount();
c1.get_statement();
c1.get_Bal();
c1.withdrawing_Amount();
c1.close_Account();

