import React, { useState, useEffect } from 'react'
//import axios from "axios";
import styles from './getAllUser.module.css';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from'../Message/Message'
import { Redirect } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
function GetAllUser({GetUsersList}) {
  const {loading,error,userList}=useSelector(state=>state.userData);
  console.log(loading,error,userList)
  useEffect(() => {
    GetUsersList();
  }, []);

if(error){
  window.location="/login"
}
  const head = ['Tid', 'Name', 'Email', 'Contact', 'Role', 'Status'];
  return (
    
<div className={styles.out_put_container}>
    <div className={styles.output_tbl} >
     {
      loading ?
      <div className={styles.loader}>
        <ScaleLoader color='#149191' width={10} height={60} />
        <p>Searching Files....</p>
      </div>:
      error?
      
      <Message variant='danger'>{error}, Please Login again</Message>:
      
      <>
      <Table  className={styles.tbl_contnt} striped bordered hover  >
        <thead>{
          userList.length>0 &&
        <tr>
          <th>Tid</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Role</th>
          <th>Status</th>
         </tr>
}
         </thead>
         <tbody>
          {
            userList && userList.map((item)=>{
              const {id,name,email,Contact,role,verified}=item;
              
              return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td className='Id'>{email}</td>
                  <td className='store'>{Contact}</td>
                  <td className='status'>{role}</td>
                  <td>{verified?'Verified':'Not Verified'}</td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </Table>
</>
}
    </div>
    </div> 
  )
}

export default GetAllUser