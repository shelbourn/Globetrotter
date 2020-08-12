import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
})

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell)

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein }
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const DestinationView = () => {
	const destinationsState = useSelector((state) => state.destinations)

	const tableRowHeaders = [
		'Destination Name',
		'Destination Price',
		'Destination Description',
		'Destination Difficulty',
		'ID',
	]

	const tableRowMap = tableRowHeaders.map((name) => {
		return <StyledTableCell key={name.id}>{name}</StyledTableCell>
	})

	const classes = useStyles()

	return (
		<>
			<div style={{ margin: '15px 10px 15px 10px', fontWeight: 'bold' }}>
				<Typography variant="h4" color="primary">
					Destination List
				</Typography>
			</div>
			<div style={{ margin: '21px 10px 15px 10px' }}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="destinations table">
						<TableHead>
							<TableRow>{tableRowMap}</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right">{row.calories}</TableCell>
									<TableCell align="right">{row.fat}</TableCell>
									<TableCell align="right">{row.carbs}</TableCell>
									<TableCell align="right">{row.protein}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</>
	)
}

export default DestinationView
