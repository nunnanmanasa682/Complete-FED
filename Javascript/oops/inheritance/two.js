class Account
{
    min_Bal=500;
    get_Account_details(){
        console.log("diplaying account");
    }
}
class Saving_Account extends Account{
    deposite_Amount(amount){
        console.log(this.min_Bal+amount);
    }
}
 let a1= new Saving_Account()
a1.get_Account_details() 
console.log(a1.min_Bal);
a1.deposite_Amount(1500)

class current_Account extends Account{
    min_Bal=10000;
    deposite_amount(amount){
        console.log(this.min_Bal+amount);
    }

}