import React from 'react'
import TextField from '@material-ui/core/TextField'
import { TextValidator } from 'react-material-ui-form-validator'

const formInput = (props) => {
	return (
		<TextValidator
			style={props.style}
			validators={props.validators}
			errorMessages={props.errorMessages}
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

export default formInput
