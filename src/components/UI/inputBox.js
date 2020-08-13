import React from 'react'
import TextField from '@material-ui/core/TextField'

const inputBox = (props) => {
	return (
		<TextField
			style={props.style}
			id="outlined-required"
			label={props.label}
			name={props.name}
			placeholder={props.placeholder}
			variant="outlined"
			multiline={props.multiline}
			onChange={props.onChange}
			value={props.value}
			type={props.number ? 'number' : 'text'}
			InputProps={{
				startAdornment: props.adornment,
			}}
		/>
	)
}

export default inputBox
