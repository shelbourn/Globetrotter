import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: '60%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

const DifficultySelect = (props) => {
	const classes = useStyles()

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl} required>
				<InputLabel id={props.labelId}>{props.inputName}</InputLabel>
				<Select
					labelId={props.labelId}
					id={props.id}
					value={props.value}
					onChange={props.onChange}
					label={props.label}
					ref={props.ref}
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
