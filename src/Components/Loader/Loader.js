import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({myStyle}) => (
	<Spinner
		animation='border'
		role='status'
		style={{
			width: '100px',
			height: '100px',
			margin: 'auto',
			display: 'block',
			...myStyle
		}}
        
	>
	</Spinner>
);


export default Loader;