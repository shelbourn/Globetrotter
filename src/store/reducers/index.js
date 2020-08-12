const initialState = {
	destinations: {
		destName: '',
		destPrice: '',
		destDescription: '',
		destDifficulty: '',
		id: '',
	},
}

const destinations = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_DESTINATION':
			return { destinations: action.payload }

		case 'CLEAR_FORM':
			return { destinations: action.payload }

		default:
			return state
	}
}

export default destinations
