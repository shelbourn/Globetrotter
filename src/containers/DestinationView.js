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
import InputBox from '../components/UI/inputBox'
import Button from '../components/UI/button'
import OnEmptyTable from '../components/UI/onEmptyTable'

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

const initialState = {}

const DestinationView = () => {
	const [destFiltered, setDestFiltered] = useState([])

	const [searchString, setSearchString] = useState('')

	const [destinations, setDestinations] = useLocalStorage(
		'storedDestinations',
		[initialState]
	)

	const filterFunction = (array) => {
		setDestFiltered(array)
	}

	const onChangeHandler = (event) => {
		setSearchString(event.target.value)
	}

	const search = (str) => {
		console.log('goddammit:', str)
		console.log(destinations)

		const res = destinations.filter((objs) => {
			if (
				Object.values(objs).some((v) =>
					v.toLowerCase().includes(str.toLowerCase())
				)
			) {
				return objs
			}
		})
		console.log(res)
		setSearchString(str)
		setDestFiltered(res)
	}

	const clearSearch = () => {
		setSearchString('')
		setDestFiltered([])
	}

	const tableRowHeaders = [
		'Destination Name',
		'Destination Price',
		'Destination Description',
		'Destination Difficulty',
		'ID',
	]
	const tableHeaderMap = tableRowHeaders.map((header, i) => {
		return <StyledTableCell key={header.id + '-' + i}>{header}</StyledTableCell>
	})
	console.log(destFiltered)
	const len = destFiltered.length
	const tableRowMap =
		len === 0
			? destinations.map((row, i) => {
					return (
						<TableRow key={row.id + '-' + i}>
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
			: destFiltered.map((row, i) => {
					return (
						<TableRow key={row.id + '-' + i}>
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

	if (destinations.length === 1) return <OnEmptyTable />
	return (
		<>
			<div style={{ margin: '15px 10px 15px 10px', fontWeight: 'bold' }}>
				<Typography variant="h4" color="primary">
					Destination List
				</Typography>
			</div>
			<span
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<InputBox
					style={{ width: '40%', marginRight: '16px' }}
					onChange={(event) => search(event.target.value)}
					placeholder={'Filter Destinations'}
					value={searchString}
				/>
				<Button
					onClick={() => clearSearch()}
					style={{ width: '20%', fontSize: '1.1rem' }}
				>
					Clear
				</Button>
			</span>
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
