function validate(){
    let user=document.getElementById('user').value;
let mobile=document.getElementById('mobile').value;
 
if(user==""){
    document.getElementById('user_Message').innerHTML="please enter user Name"
}
if(user.length<4){
    document.getElementById('user_Message').innerHTML="please Enter min 4 char"
}
if(mobile==null || mobile.length <=10){
    document.getElementById('mobile_Message').innerHTML="please enter mobile number"
}
 return false
}
