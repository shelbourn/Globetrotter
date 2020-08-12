import React from 'react'
import Button from '@material-ui/core/Button'

const button = (props) => {
	return (
		<Button
			variant="contained"
			color={props.color}
			style={{
				width: '220px',
				height: '60px',
				margin: '6px',
				fontSize: '1.1rem',
			}}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	)
}

export default button
