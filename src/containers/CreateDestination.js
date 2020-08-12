import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputBox from '../components/UI/inputBox'
import Button from '../components/UI/button'
import DifficultySelect from '../components/UI/difficultySelect'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import useId from 'react-id-generator'

const CreateDestination = () => {
	const [destinations, setDestinations] = useState({
		destName: '',
		destPrice: '',
		destDescription: '',
		destDifficulty: '',
		id: '',
	})

	const destinationsState = useSelector((state) => state.destinations)

	const dispatch = useDispatch()

	const onChangeHandler = (prop) => (event) => {
		setDestinations({ ...destinations, [prop]: event.target.value })
	}

	const newId = useId()

	const onClickHandler = () =>
		dispatch({
			type: 'ADD_DESTINATION',
			payload: { ...destinations, id: newId },
		})

	const clearFormHandler = () => {
		setDestinations({
			destName: '',
			destPrice: '',
			destDescription: '',
			destDifficulty: '',
			id: '',
		})
		dispatch({
			type: 'CLEAR_FORM',
			payload: { destinations },
		})
	}

	return (
		<>
			<div style={{ margin: '15px 10px 15px 10px', fontWeight: 'bold' }}>
				<Typography variant="h4" color="primary">
					Create Destination
				</Typography>
			</div>
			<form id="create-destination-form">
				<InputBox
					label="Destination Name"
					placeholder="Enter a Destination"
					onChange={onChangeHandler('destName')}
					value={
						destinationsState.destName
							? destinationsState.destName
							: destinations.destName
					}
				/>
				<InputBox
					label="Price"
					placeholder="Price"
					onChange={onChangeHandler('destPrice')}
					value={
						destinationsState.destPrice
							? destinationsState.destPrice
							: destinations.destPrice
					}
					adornment={<InputAdornment position="start">$</InputAdornment>}
				/>
				<InputBox
					label="Description"
					multiline
					placeholder="Enter a Description"
					onChange={onChangeHandler('destDescription')}
					value={
						destinationsState.destDescription
							? destinationsState.destDescription
							: destinations.destDescription
					}
				/>
				<DifficultySelect
					id="destination-difficulty-input"
					label="difficulty"
					inputName="Difficulty"
					labelId="difficulty-select-label"
					onChange={onChangeHandler('destDifficulty')}
					value={
						destinationsState.destDifficulty
							? destinationsState.destDifficulty
							: destinations.destDifficulty
					}
				/>
				<span style={{ width: '60%' }}>
					<Button color="primary" onClick={onClickHandler}>
						Save Destination
					</Button>
					<Button color="secondary" onClick={clearFormHandler}>
						Clear Form
					</Button>
				</span>
			</form>
		</>
	)
}

export default CreateDestination
