import React,{useEffect,Fragment}from 'react'
// import Sidebar from '../../Sidebar/Sidebar'
// import { Link } from "react-router-dom";
import  styles from './dashboard.module.css';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Message from'../Message/Message'
// import { Redirect } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import ProductCard from './ProductCard';
import Styles from "./dashboard.module.css"

function Dashboard({getproduct}) {
    const {loading,error,products,productsCount,resultPerPage,filteredProductsCount}=useSelector(state=>state.productData);
  console.log(loading,error,products,productsCount,resultPerPage,filteredProductsCount)
  useEffect(() => {
    getproduct();
  }, []);

if(error){
  window.location="/login"
}
  return (
    <div className={Styles.dashboard}>
      <Row>
        <Col xs={3}>
        <h2>brand</h2>
        <input type="checkbox" name="wrong" value='checked'/>
        </Col>
        <Col xs={9}>
        {/* <Container> */}
  {
      loading ?
      <div className={Styles.loader}>
        
        <ScaleLoader color='#149191' width={10} height={60} />
        <p>Searching Products....</p>
      </div>:
      error?
      
      <Message variant='danger'>{error}, Please Login again</Message>:
      
      
  <>
  <Fragment>
   
          <div className={Styles.container} id="container">
            {products &&
              products.map((product,index) => (
                <ProductCard key={product._id+"_"+index} product={product} />
              ))}
          </div>
        </Fragment>
 </>

 }
 
     {/* </Container> */}
        </Col>
      </Row>
     
    </div>
  )
}

export default Dashboard