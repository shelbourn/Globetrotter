import React from 'react'
import TextField from '@material-ui/core/TextField'

const inputBox = (props) => {
	return (
		<div>
			<TextField
				style={{ margin: '6px', width: '60%' }}
				required
				id="outlined-required"
				label={props.label}
				placeholder={props.placeholder}
				variant="outlined"
				multiline={props.multiline}
				onChange={props.onChange}
				value={props.value}
				InputProps={{
					startAdornment: props.adornment,
				}}
			/>
		</div>
	)
}

export default inputBox
