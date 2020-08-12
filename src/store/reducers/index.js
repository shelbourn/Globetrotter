const initialState = []

const destinations = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_DESTINATION':
			return { ...destinations, destinations: action.payload }

		case 'CLEAR_FORM':
			return { ...destinations, destinations: action.payload }

		default:
			return state
	}
}

export default destinations
