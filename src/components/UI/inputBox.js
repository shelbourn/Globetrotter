import React from 'react'
import TextField from '@material-ui/core/TextField'
import { TextValidator } from 'react-material-ui-form-validator'

const inputBox = (props) => {
	return (
		<div>
			<TextField
				style={props.style}
				required
				id="outlined-required"
				label={props.label}
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
		</div>
	)
}

export default inputBox
