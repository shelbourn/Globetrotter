import React from 'react'
import Button from '../UI/button'
import InputBox from '../UI/inputBox'

const searchBar = ({ destinations = [] }) => {
	const search = (str) => {
		console.log(str, destinations)
		return
		destinations.filter((objs) => {
			if (Object.values(objs).some((v) => v.includes(str))) {
				return objs
			}
		})
	}
	return (
		<>
			<InputBox
				onChange={($event) => console.log(search($event))}
				placeholder={'Yo Mama'}
			/>
			<Button>Clear</Button>
		</>
	)
}

export default searchBar
