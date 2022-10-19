import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Message from'../Message/Message'
import validator from 'validator'
import styles from '../AllUser/getAllUser.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import Styles from './Login.module.css'
import { Link } from 'react-router-dom';
import './Login.module.css'

export default function Login({getLogin}) {
  const {loading,error,user,isAuthenticated,userLoadMessage}=useSelector(state=>state.userData);
  const postdata = (data) => {
    axios.post("http://localhost:9000/user/login", data).then(   //${base_url}\api\Registers
      (response) => {
        //success
        console.log(response, "============");
        if (response.data.message === 'Invalid Credentials') {
          window.alert("Invalid Credentials")
        } else {
          console.log(response.data.authtoken, "++++++")
          localStorage.setItem('authtoken', response.data.authtoken)
          console.log(localStorage.getItem('authtoken'))
          window.alert("Login done Successfully")
          window.location = '/user/dashboard'
        }
      }, (error) => {
        //error
        window.alert(error, 'Login Failed')
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );
  };
  const [emailerror, setemailerror] = useState('')
  const [passworderror, setpassworderror] = useState('');
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setemailerror('')
    } else {
      setemailerror('Enter valid Email!')
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
  const [login, setlogin] = useState({});
  const handleSubmit = (e) => {
    console.log(login, "+++++++++++++++++++");
    e.preventDefault();
    //postdata(login);
    getLogin(login)
    if(isAuthenticated){
      window.alert("Login done Successfully")
      window.location = '/user/dashboard'
    }else if(userLoadMessage==="failed"){
      window.alert("Invalid credentials,Login failed!");
    }


  };

  return (
    <div className='Container'>
      {userLoadMessage==="loading" ? <div className={styles.loader}>
        <ScaleLoader color='#149191' width={10} height={60} />
        <p>Searching Files....</p>
      </div>:
      error?
      <Message variant='danger'>{error}, Please Login again</Message>:
      <div className={Styles.box}>
            <form onSubmit={handleSubmit}>
            <h4 style={{textAlign:'center',marginBottom:'1rem'}}>Signin</h4>
                <p>
                    <label>Email address</label><br/>
                    <input type="text" name="first_name" required 
                     onChange={(e) => {
                      validateEmail(e)
                      e.preventDefault()
                      setlogin({ ...login, email: e.target.value })
    
                    }}

                    //helperText={emailerror}
                    />
                    <span style={{color:'red'}}>{emailerror}</span>
                </p>
                <p>
                    <label>Password</label>
                    <a style={{float:'right'}} href="/forgotpassword"><label className="right-label">Forget password?</label></a>
                    <br/>
                    <input type="password" name="password" required
                    onChange={(e) => {
                      validatePassword(e)
                      e.preventDefault()
                      setlogin({ ...login, password: e.target.value })
                    }}
                    // error={Boolean(passworderror)}
                    // helperText={passworderror}
                     />
                </p>
                <span style={{color:'red'}}>{passworderror}</span>
                <p>
                    <button  className ={Styles.sub_btn} type="submit">Login</button>
                    <button style={{marginTop:'1rem'}} className ={Styles.sub_btn} type="reset"
                     onClick={(e) => {
                     setlogin({})
                     }}
              >
                Reset
              </button>
                </p>
             <p><Link to="register">Don't have account?</Link></p>   
            </form>
        </div>
}
    </div>
  );
}