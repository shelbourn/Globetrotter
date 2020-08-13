import React from 'react'
import Button from '../UI/button'
import InputBox from '../UI/inputBox'
import useLocalStorage from '../../utilities/useLocalStorage'
import { useSelector } from 'react-redux'

const searchBar = ({ filterFunction, onChange, searchString }) => {
	// const destinations = useSelector((state) => state.destinations)
	const destinations = localStorage.getItem('storedDestinations')

	const search = (str) => {
		console.log('goddammit:', str, searchString)
		console.log(destinations)
		return destinations.filter((objs) => {
			if (Object.values(objs).some((v) => v.includes(str))) {
				return objs
			}
		})
	}
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<InputBox
					style={{ width: '300px', marginRight: '16px' }}
					onChange={() => filterFunction(search(onChange))}
					placeholder={'Yo Mama'}
				/>
				<Button style={{ width: '100px' }}>Clear</Button>
			</div>
		</>
	)
}

export default searchBar
