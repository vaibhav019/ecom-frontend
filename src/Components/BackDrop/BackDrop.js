import React from 'react';
import classes from './BackDrop.module.css';

const BackDrop = (props) => (
	<div className={classes.back_drop} onClick={props.click}/>
);

export default BackDrop;