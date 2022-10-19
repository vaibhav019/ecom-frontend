import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) =>
	<div style={{width:'50%'}}>
 		<Alert	variant={variant}>{children}</Alert>
 	</div>

Message.defaultProps = {
	variant: 'info',
};

export default Message;