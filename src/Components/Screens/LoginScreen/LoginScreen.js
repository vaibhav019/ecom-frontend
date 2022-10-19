import React from 'react'
import Login from '../../Login/Login'
import { useDispatch, useSelector } from 'react-redux';
import {  login} from '../../../redux/actions/users';
function LoginScreen() {
  const dispatch=useDispatch();
  const getLogin=(data)=>{
      dispatch(login(data))
  }
  
  // useEffect(()=>{
  //   return ()=>{
  //     dispatch(ClearToken())
      
  //   }
  // },[dispatch])
  return (
    <div>
<Login getLogin={getLogin}/>
    </div>
  )
}

export default LoginScreen