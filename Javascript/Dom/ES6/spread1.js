let user={
    id:101,
    name:"mani",
    salary:450000
}
let details={
    salary:45000,
     location:"bangalore",
     email:"mani@gmail.com"
    
}
let user_details={
        ...user,
        ...details
}
console.log(user_details);