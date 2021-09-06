import React from 'react';

function Divline(props) {
	const style = {
		backgroundColor: 'white',
		color: 'black'
	};

	return (
		<div style={style}>
			{props.name}
		</div>
	)
}

export default Divline;