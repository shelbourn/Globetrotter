import { UPDATE_DESTINATIONS } from './actionTypes'
import nextId from 'react-id-generator'

export const updateDestinations = (destinations) => ({
	type: UPDATE_DESTINATIONS,
	payload: destinations,
})
