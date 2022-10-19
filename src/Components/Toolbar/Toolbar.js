import React from 'react';
import { Button} from 'react-bootstrap';
import classes from './Toolbar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import {BsHeart} from 'react-icons/bs'
import {RiShoppingBag3Line} from 'react-icons/ri'
import {VscAccount} from 'react-icons/vsc'
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Toolbar = (props) => 
{
	const {user,isAuthenticated}=useSelector(state=>state.userData);
	// const options=['Brands','Brands','Brands','Brands','Brands','Brands','Brands','Brands','Brands','Brands','Brands',
	// 'Brands','Brands','Brands','Brands','Brands','Brands','Brands'
	// ]
	return(
	<header className={classes.toolbar}>
		<nav className={classes.toolbar_navigation}>
			<AiOutlineMenu 
			size='40'
			//className={classes.menu}size='40' onClick={props.opensidebar}
			/>&nbsp;&nbsp;
			
			{/*<div className={classes.toolbar_logo}>
				<center><img  alt=''/> 
				7-Transfer Dashboard</center>
			</div> */}
			<input type="text" placeholder='Search for Brands,tshirts etc..'  style={{width:"70%",borderRadius:'8px'}}/>
		{/* <button style={{  marginLeft: '.5%',borderRadius:'8px' }} >
            Search
          </button> */}
		  <Button style={{  marginLeft: '.5%',borderRadius:'8px' }} variant="success">Search</Button>{' '}
			<div className={classes.spacer}/>
			{isAuthenticated?
			<Button style={{  marginLeft: '.5%',borderRadius:'8px' }} variant="success">Logout</Button>:
			<Button style={{  marginLeft: '.5%',borderRadius:'8px' }} variant="success">Login</Button>
            }
			<div className={classes.spacer}/>
			<div className={classes.toolbar_navigation_items}>
			<RiShoppingBag3Line size='25'/>&nbsp;&nbsp;|&nbsp;&nbsp;
				<BsHeart size='25'/>&nbsp;&nbsp;|&nbsp;&nbsp;
				<VscAccount size='25'/>
				
			</div>
			
		</nav>
		{/* <div className='Container' style={{margin:'.5rem',marginBottom:'1rem' , backgroundColor: '#fff'}}>
		{
		
options.map(item => <span style={{paddingLeft:'1rem'}} >{item}</span>)
		}
		</div> */}
	</header>
)};

export default Toolbar;