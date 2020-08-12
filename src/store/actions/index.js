import { ADD_DESTINATION } from './actionTypes'
import nextId from 'react-id-generator'

export const addDestination = (destinations) => ({
	type: ADD_DESTINATION,
	payload: {
		...destinations,
		id: nextId(),
	},
})
