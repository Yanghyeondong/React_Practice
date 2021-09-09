import React from 'react';

function Div_line(props) {
	const style = {
		background: 'white',
		color: 'black',
	};

	return (
		<div style={ {border: '3px solid white'}}>
			<div style={style}>
				{props.name}
			</div>
			<br />
			{props.children}
			<br />
		</div>
	);
}

export default Div_line;