import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const DifficultySelect = ({
	style,
	labelId,
	inputName,
	id,
	value,
	onChange,
	label,
}) => {
	return (
		<div>
			<FormControl variant="outlined" style={style} required>
				<InputLabel id={labelId}>{inputName}</InputLabel>
				<Select
					labelId={labelId}
					id={id}
					value={value}
					onChange={onChange}
					label={label}
				>
					<MenuItem value={'Easy'}>Easy</MenuItem>
					<MenuItem value={'Intermediate'}>Intermediate</MenuItem>
					<MenuItem value={'Hard'}>Hard</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}

export default DifficultySelect
