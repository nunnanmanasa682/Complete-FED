  class Account{
    get_Account(){
        console.log("Account_get_Account_Details");
    }
  }
  class saving_Account extends Account{
    //method overding
    get_Account(){
 console.log("saving_Account class_method");
    }
  } let a1=new saving_Account();
  a1.get_Account();