import React2,{useState,useEffect} from 'react'
import Dashboard from '../../dashboard/dashboard'
import { useDispatch, useSelector } from 'react-redux';
import {getProduct,clearErrors  } from '../../../redux/actions/products';
function DashboardScreen() {
    const dispatch=useDispatch();
    const getproduct=()=>{
        dispatch(getProduct())
    }
    
    // useEffect(()=>{
    //   return ()=>{
    //     dispatch(clearErrors())
        
    //   }
    // },[dispatch])

  return (
    <div>
        <Dashboard getproduct={getproduct}/>
    </div>
  )
}

export default DashboardScreen