import React from 'react';

function Div_line(props) {
	const style = {
		background: 'white',
		color: 'black',
	};

	return (
		<div>
			<br />
			<div style={style}>{props.name}</div>
			<br />
		</div>
	);
}

export default Div_line;