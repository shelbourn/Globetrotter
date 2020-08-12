import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import useLocalStorage from '../utilities/useLocalStorage'
import SearchBar from '../components/UI/searchBar'

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

const DestinationView = () => {
	const [destFiltered, setDestFiltered] = useState([])

	const [destinations, setDestinations] = useLocalStorage(
		'storedDestinations',
		[
			{
				destName: '',
				destPrice: '',
				destDescription: '',
				destDifficulty: '',
				id: '',
			},
		]
	)

	const tableRowHeaders = [
		'Destination Name',
		'Destination Price',
		'Destination Description',
		'Destination Difficulty',
		'ID',
	]
	const tableHeaderMap = tableRowHeaders.map((header) => {
		return <StyledTableCell key={header.id}>{header}</StyledTableCell>
	})
	const tableRowMap = destinations.map((row, i) => {
		console.log(row)
		return (
			<TableRow key={row.id}>
				<TableCell component="th" scope="row">
					{row.destName}
				</TableCell>
				<TableCell align="center">{row.destPrice}</TableCell>
				<TableCell align="center">{row.destDescription}</TableCell>
				<TableCell align="center">{row.destDifficulty}</TableCell>
				<TableCell align="center">{row.id}</TableCell>
			</TableRow>
		)
	})
	const classes = useStyles()
	return (
		<>
			<div style={{ margin: '15px 10px 15px 10px', fontWeight: 'bold' }}>
				<Typography variant="h4" color="primary">
					Destination List
				</Typography>
			</div>
			<SearchBar
				destintations={destinations}
				setDestFiltered={setDestFiltered}
			/>

			<div style={{ margin: '21px 10px 15px 10px' }}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="destinations table">
						<TableHead>
							<TableRow>{tableHeaderMap}</TableRow>
						</TableHead>
						<TableBody>{tableRowMap}</TableBody>
					</Table>
				</TableContainer>
			</div>
		</>
	)
}

export default DestinationView
