import React,{useEffect}from 'react'
import GetAllUser from '../../AllUser/getAllUser'
import { useDispatch, useSelector } from 'react-redux';
import {  GetUsersList ,ClearFileData} from '../../../redux/actions/users';
function GetAllUserscreen() {
    
    const dispatch=useDispatch();
    const getUserData=()=>{
        dispatch(GetUsersList())
    }
    
    useEffect(()=>{
      return ()=>{
        dispatch(ClearFileData())
        
      }
    },[dispatch])
  return (
    <div>
        <GetAllUser 
        GetUsersList={getUserData}
        />

    </div>
  )
}

export default GetAllUserscreen;