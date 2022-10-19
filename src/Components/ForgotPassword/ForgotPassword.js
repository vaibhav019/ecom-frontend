import React,{useState} from 'react'
import axios from'axios'
import { Link } from 'react-router-dom'
import "./ForgotPassword.module.css"
import validator from 'validator'
import Styles from  "./ForgotPassword.module.css"
export default function ForgetPasswordPage() {
    const [data, setdata] = useState({});
    const [emailerror, setemailerror] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email)) {
          setemailerror('')
        } else {
          setemailerror('Enter valid Email!')
        }
      }
    const postdata = (data) => {
        axios.post("http://localhost:9000/user/reset", data).then(   
          (response) => {
            //success
            console.log(response);
          
            window.alert(`Please check your mail`)
            console.log("successs");
          }, (error) => {
            //error
            console.log(error);
            console.log("failed +++++++++++++++++++")
            window.alert(" reset failed with",error)
          }
        );
      };
     
      const handleSubmit = (e) => {
          postdata(data);
        e.preventDefault();
      };
    return (
        <div className={Styles.container}>
            
            <form onSubmit={handleSubmit} style={{backgrounColor:'aqua'}}>
            <h4 style={{textAlign:'center',marginBottom:'1rem'}}>Reset your password</h4>
                <p>
                    <label id="email">Email address</label><br/>
                    <input type="email" name="email" required 
                    onChange={(e) => {
                        validateEmail(e)
                        setdata({email: e.target.value })
                      }}/>
                </p>
                <p>
                    <button id={Styles.sub_btn} type="submit">Send email</button>
                </p>
                
            </form>
            <div style={{marginLeft:'2rem'}}>
            <p ><Link to="register">Don't have account?</Link>&nbsp;&nbsp;<Link to="/login">Back to login</Link></p> 
                </div>
       </div>
        
    )
}