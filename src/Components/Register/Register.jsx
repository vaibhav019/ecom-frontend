import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import validator from 'validator'
import './Register.module.css'
import { Link } from 'react-router-dom';
import styles from "./Register.module.css"


export default function Register() {
 
  useEffect(() => {
    document.title = "Registration|ecommerce"
    
  }, []);
  

  const postdata = (data) => {
    axios.post("http://localhost:9000/user/register", data).then(   
      (response) => {
        //success
        console.log(response);
      
        window.alert(`Registration done Successfully,Please check your mail
         ${response.data.url}`)

        window.location = "/";

        console.log("successs");
      }, (error) => {
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
        window.alert("Registration failed with",error)
      }
    );
  };
  const [emailerror, setemailerror] = useState('');
  const [phoneerror, setphoneerror] = useState('');
  const [passworderror, setpassworderror] = useState('');
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setemailerror('')
    } else {
      setemailerror('Enter valid Email!')
    }
  }
  const validatePhoneNumber = (e) => {
    var phone = e.target.value
    if (validator.isMobilePhone(phone) && phone.length == 10) {
      setphoneerror('')
    } else {
      setphoneerror('Enter valid Phone Number ')
    }
  }
  const validatePassword = (e) => {
    var password = e.target.value
    if (password.length >= 8) {
      setpassworderror('')
    } else {
      setpassworderror('Password should not grater the 8')
    }
  }
  const [register, setregister] = useState({});
  console.log(register, "register data");
  const handleSubmit = (e) => {
      postdata(register);
    e.preventDefault();
  };
  return (
    <div>
    <div className={styles.container}>
            <form onSubmit={handleSubmit}>
            <h4 style={{textAlign:'center',marginBottom:'1rem'}}>Signup</h4>
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" required onChange={(e) => {
                      setregister({ ...register, name: e.target.value })
                    }} />
                </p>
                <p>
                    <label>Email </label><br/>
                    <input type="email" name="email" required
                    onChange={(e) => {
                      validateEmail(e)
                      setregister({ ...register, email: e.target.value })
                    }} />
                    <p style={{color:'red'}}>{emailerror}</p>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc 
                    onChange={(e) => {
                      validatePassword(e)
                      setregister({ ...register, password: e.target.value })
                    }}
                    // error={Boolean(passworderror)}
                    // helperText={passworderror}
                    />
                </p>
                <p style={{color:'red'}}>{passworderror}</p>
                <p>
                    <label>Contact</label><br/>
                    <input type="text" name="contact" require
                     onChange={(e) => {
                      validatePhoneNumber(e)
                      setregister({ ...register, contact: e.target.value })
                    }}
                    // error={Boolean(phoneerror)}
                    // helperText={phoneerror} 
                    />
                </p>
                <p style={{color:'red'}}>{phoneerror}</p>
                <p>
                    <button id={styles.sub_btn} type="submit">Signup</button>
                    <button style={{marginTop:'1rem'}}  id={styles.sub_btn}  type="reset"
                     onClick={(e) => {
                     setregister({})
                     }}
              >
                Reset
              </button>
                </p>
            </form>
            <p style={{textAlign:'center'}}><Link to="/login">already have account?</Link></p>
            
        </div>
    </div>
  );
}