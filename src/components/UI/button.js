import React from 'react'
import Button from '@material-ui/core/Button'

const button = ({ color, style, onClick, type, children }) => {
	return (
		<Button
			variant="contained"
			color={color}
			style={style}
			onClick={onClick}
			type={type}
		>
			{children}
		</Button>
	)
}

export default button
