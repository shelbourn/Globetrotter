import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CryingFace from '../../assets/crying-emoji-svgrepo-com.svg'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(50),
			height: theme.spacing(50),
			padding: theme.spacing(2),
		},
	},
}))

const OnEmptyTable = (props) => {
	const classes = useStyles()

	return (
		<>
			<div style={{ margin: '15px 10px 15px 10px', fontWeight: 'bold' }}>
				<Typography variant="h4" color="primary">
					Your Destination List is Empty
				</Typography>
			</div>
			<div className={classes.root}>
				<Paper elevation={3}>
					<img src={CryingFace} alt="Crying Face" />
				</Paper>
			</div>
			<div style={{ margin: '15px 10px 15px 10px', fontWeight: 'bold' }}>
				<Typography variant="h5" color="secondary">
					Your destination list may be empty now, but it won't be for long! Time
					to start traveling!
				</Typography>
			</div>
		</>
	)
}

export default OnEmptyTable
