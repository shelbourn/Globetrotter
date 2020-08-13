import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

const formInput = ({
	style,
	validators,
	errorMessages,
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
		<TextValidator
			style={style}
			validators={validators}
			errorMessages={errorMessages}
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

export default formInput
