export const addDestination = ({
	destName,
	destPrice,
	destDescription,
	destDifficulty,
}) => ({
	type: 'ADD_DESTINATION',
	payload: {
		id: destName,
		destName,
		destPrice,
		destDescription,
		destDifficulty,
	},
})

export const clearForm = ({
	destName,
	destPrice,
	destDescription,
	destDifficulty,
}) => ({
	type: 'CLEAR_FORM',
	payload: {
		id: '',
		destName: '',
		destPrice: '',
		destDescription: '',
		destDifficulty: '',
	},
})
