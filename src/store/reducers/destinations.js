import * as actionsTypes from '../actions/actionTypes'

const initialState = localStorage.getItem('storedDestinations')

const destinations = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypes.UPDATE_DESTINATIONS:
			return localStorage.getItem('storedDestinations')

		default:
			return state
	}
}

export default destinations
