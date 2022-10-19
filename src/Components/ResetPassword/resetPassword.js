import React,{useState} from 'react'
import axios from'axios'
import { Link,useParams } from 'react-router-dom'
// import '../../App.css'
import "./resetPassword.module.css"
import validator from 'validator'
export default function ResetPasswordPage() {
    let { token } = useParams();
    const [data, setdata] = useState({});
    const [passworderror, setpassworderror] = useState('');
    const validatePassword = (e) => {
        var password = e.target.value
        if (password.length >= 8) {
          setpassworderror('')
        } else {
          setpassworderror('Password should not grater the 8')
        }
    
    
      }
    const postdata = (data) => {
        axios.post(`http://localhost:9000/user/resetpassword?token=${token}`, data).then(   
          (response) => {
            //success
            console.log(response);
          
            window.alert(`password updated`)
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
        <div className="text-center m-5-auto">
            
            <form onSubmit={handleSubmit}>
            <h4>Reset your password</h4>
                <p>
                    <label id="password">Enter Password</label><br/>
                    <input type="text" name="password" required 
                    onChange={(e) => {
                        validatePassword(e)
                        setdata({password: e.target.value })
                      }}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Submit</button>
                </p>
                <p><Link to="/login">Back to login</Link>.</p> 
            </form>
           
       </div>
        
    )
}