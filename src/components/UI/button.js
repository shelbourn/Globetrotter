import React from 'react'
import Button from '@material-ui/core/Button'

const button = (props) => {
	return (
		<Button
			variant="contained"
			color={props.color}
			style={props.style}
			onClick={props.onClick}
			type={props.type}
		>
			{props.children}
		</Button>
	)
}

export default button
