import React from 'react'
import TextField from '@material-ui/core/TextField'

const inputBox = ({
	style,
	label,
	name,
	placeholder,
	multiline,
	onChange,
	value,
	number,
	adornment,
}) => {
	return (
		<TextField
			style={style}
			id="outlined-required"
			label={label}
			name={name}
			placeholder={placeholder}
			variant="outlined"
			multiline={multiline}
			onChange={onChange}
			value={value}
			type={number ? 'number' : 'text'}
			InputProps={{
				startAdornment: adornment,
			}}
		/>
	)
}

export default inputBox
