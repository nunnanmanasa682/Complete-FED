import React,  { useState } from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import './Registration.css'
const RegistrationForm = () => {
    const [values, setvalues] = useState({
        name: "",
        email: "",
        mobilenumber: "",
        password: "",
        re_enter: ""
        })
      const [nameerr, setNameErr] = useState(null)
      const [emailerr, setEmailErr] = useState(null)
      const [mobilenumbererr, setmobileNumberErr] = useState(null)
      const [passworderr, setPasswordErr] = useState(null)
      const [reEnterErr, setReEnterErr] = useState(null)
      const [valid, setValid] = useState(false)
    
     let getData = (event) => {
        setvalues({ ...values, [event.target.name]: event.target.value})
      }
      useEffect(() =>{
        if (valid === true){
            validateForm()
        }
      }, [values])

     let validateForm = () => {
        let name = values.name
        let email = values.email
        let mobilenumber = values.mobilenumber
        let password = values.password
        let re_enter = values.re_enter
//validation for name
    if (name === "") {
        setNameErr("Enter ur name")
    }
    else if(name.length < 4 || name.length > 15){
        setNameErr("Name must contain min 4 & max 15 characters")
    }
    else {
         setNameErr("")
    }

    //validation for email
     if (email === "") {
         setEmailErr("Enter your email")
     }
     else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
       setEmailErr("Enter valid Email")
      }
      else{
        setEmailErr("")
      }

      //validation for mobilenumber
      if(mobilenumber === "") {
        setmobileNumberErr("Enter your mobile number")
      }
  else if(mobilenumber.length < 10 || mobilenumber.length > 10){
setmobileNumberErr("Enter valid mobile number")
  }
  else{
    setmobileNumberErr("")
  }

  //validation for password
  if (password === "") {
    setPasswordErr("Enter Your Password")
  }
  else if (password.length < 6 || password.length > 12) {
    setPasswordErr("Password Length sholud be min 6 & max 12")
  }
  else if (!/(?=.*?[A-Z])/.test(password)) {
    setPasswordErr("Password should contain one UpperCase Letter")
  }
  else if (!/(?=.*?[a-z])/.test(password)) {
    setPasswordErr("Password should contain one LowerCase Letter")
  }
  else if  (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
    setPasswordErr("Password should contain one Special Character")

  }
  else if (!/(?=.*?[0-9])/.test(password)) {
    setPasswordErr("Password sholud contain one digit")
  }
  else {
    setPasswordErr("")
  }
  //validation for re-enter
   if (re_enter === "") {
    setReEnterErr("Re-Enter Your Password")
   }
   else if (re_enter !== password) {
    setReEnterErr("Password does not Match")
   }
   else if (re_enter.length < 6 || re_enter.length > 12) {
    setReEnterErr("Password Length Should be min 6 & max 12")
   }
   else if (!/(?=.*?[A-Z])/.test(re_enter)) {
    setReEnterErr("Password Should contain one UpperCase Letter")
   }
   else if (!/(?=.*?[a-z])/.test(re_enter)) {
    setReEnterErr("Password Should contan one LowerCase Letter")
   }
   else if (!/(?=.*?[#?!@$%^&*-])/.test(re_enter)) {
      setReEnterErr("Password should contain one Special character")
   }
   else {
    setReEnterErr("")
   }
   if (nameerr === "" && emailerr === "" && mobilenumbererr === "" && passworderr === "" && reEnterErr === "") {
     return true
   }
}

let submitHandler = (event) => {
  event.preventDefault()
  setValid(true)
  let k = validateForm()
  if (k === true) {
    alert("Form Submitted Succeessfully... Go to Console to view captured data..!!")
    console.log(values)
  }
}
return <>
<div className="container mt-5">
  <pre>{JSON.stringify(values)}</pre>
  <div className='row'>
    <div className="col-md-5">
      <form onSubmit={submitHandler}>
        <div className="card">
          <div className="card-header text-success">
            <h3>Registration-Form Validation using React</h3>
          </div>
          <div className='card-body'>
            <div className='form-group'>
            <input type="text" placeholder='Name' name='name'  className='form-control' onChange={getData} />
            <span className='text-danger'>{nameerr}</span>

            </div>
            <div className='form-group'>
            <input type="text" placeholder='Email' name='email'  className='form-control' onChange={getData} />
            <span className='text-danger'>{emailerr}</span>

            </div>
            <div className='form-group'>
            <input type="number" placeholder='Mobile Number' name='password' className='form-control' onChange={getData} />
            <span className='text-danger'>{mobilenumbererr}</span>

            </div>
            <div className='form-group'>
            <input type="password" placeholder='Password' name='password'  className='form-control' onChange={getData} />
            <span className='text-danger'>{passworderr}</span>

            </div>
            <div className='form-group'>
            <input type="password" placeholder='Re-Enter Password' name='re_enter'  className='form-control' onChange={getData} />
            <span className='text-danger'>{reEnterErr}</span>

            </div>

            {
                      (nameerr || emailerr || mobilenumbererr || passworderr || reEnterErr) ? <>
                        <input type="submit" value="Register" className='btn btn-warning' disabled /></> :
                        <>
                          <input type="submit" value="Register" className='btn btn-warning' />
                        </>
                    }
           </div>
        </div>
      </form>
    </div>
  </div>
</div>



</>
 }
   export default RegistrationForm
  
    
