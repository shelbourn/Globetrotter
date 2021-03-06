import React, { useRef } from 'react'
import { ValidatorForm } from 'react-material-ui-form-validator'
import FormInput from '../components/UI/formInput'
import Button from '../components/UI/button'
import DifficultySelect from '../components/UI/difficultySelect'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import useLocalStorage from '../utilities/useLocalStorage'

const CreateDestination = () => {
	const initialValues = {
		destName: '',
		destPrice: '',
		destDescription: '',
		destDifficulty: '',
		id: '',
	}
	const [values, setValues] = useLocalStorage('storedValues', initialValues)

	const [destinations, setDestinations] = useLocalStorage(
		'storedDestinations',
		[]
	)

	const formRef = useRef('form')

	const onChangeHandler = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const addDestination = (destination) => {
		try {
			if (
				values.destName === '' ||
				values.destPrice === '' ||
				values.destDescription === '' ||
				values.destDescription === ''
			)
				throw new Error('Whoopsie! Empty destination fields present. =(')
			else {
				const newDestinations = [
					...destinations,
					{ ...destination, id: destination.destName },
				]
				setDestinations(newDestinations)
			}
		} catch (err) {
			console.log(`${err.name}: ${err.message}`)
		} finally {
		}
	}

	const onClickHandler = (event) => {
		event.preventDefault()
		addDestination(values)
		console.log(destinations)
	}

	const clearFormHandler = () => {
		setValues({
			destName: '',
			destPrice: '',
			destDescription: '',
			destDifficulty: '',
			id: '',
		})
	}

	return (
		<>
			<div style={{ margin: '15px 10px 15px 10px', fontWeight: 'bold' }}>
				<Typography variant="h4" color="primary">
					Create Destination
				</Typography>
			</div>
			<ValidatorForm
				ref={formRef}
				onSubmit={onClickHandler}
				onError={(errors) => console.log(errors)}
			>
				<FormInput
					label="Destination Name"
					name="destination name"
					placeholder="Enter a Destination"
					onChange={onChangeHandler('destName')}
					value={values.destName}
					validators={['required']}
					errorMessages={['Destination Name is Required']}
					style={{ margin: '6px', width: '60%' }}
				/>
				<FormInput
					label="Price"
					name="price"
					placeholder="Price"
					onChange={onChangeHandler('destPrice')}
					value={values.destPrice}
					adornment={<InputAdornment position="start">$</InputAdornment>}
					number={true}
					validators={['required']}
					errorMessages={['Destination Price is Required']}
					style={{ margin: '6px', width: '60%' }}
				/>
				<FormInput
					label="Description"
					multiline
					name="description"
					placeholder="Enter a Description"
					onChange={onChangeHandler('destDescription')}
					value={values.destDescription}
					validators={['required']}
					errorMessages={['Destination Description is Required']}
					style={{ margin: '6px', width: '60%' }}
				/>
				<DifficultySelect
					id="destination-difficulty-input"
					label="difficulty"
					inputName="Difficulty"
					labelId="difficulty-select-label"
					onChange={onChangeHandler('destDifficulty')}
					value={values.destDifficulty}
					style={{ margin: '6px', width: '60%' }}
				/>
				<span>
					<Button
						style={{
							width: '220px',
							height: '60px',
							margin: '6px',
							fontSize: '1.1rem',
						}}
						color="primary"
						type="submit"
					>
						Save Destination
					</Button>
					<Button
						style={{
							width: '220px',
							height: '60px',
							margin: '6px',
							fontSize: '1.1rem',
						}}
						color="secondary"
						onClick={clearFormHandler}
					>
						Clear Form
					</Button>
				</span>
			</ValidatorForm>
		</>
	)
}

export default CreateDestination
