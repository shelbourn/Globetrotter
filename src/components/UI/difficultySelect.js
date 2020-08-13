import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const DifficultySelect = (props) => {
	return (
		<div>
			<FormControl variant="outlined" style={props.style} required>
				<InputLabel id={props.labelId}>{props.inputName}</InputLabel>
				<Select
					labelId={props.labelId}
					id={props.id}
					value={props.value}
					onChange={props.onChange}
					label={props.label}
				>
					<MenuItem value={'Easy'}>Easy</MenuItem>
					<MenuItem value={'Intermediate'}>Intermediate</MenuItem>
					<MenuItem value={'Difficult'}>Difficult</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}

export default DifficultySelect
