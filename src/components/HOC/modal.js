import React from 'react'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import Button from '../UI/button'

const modal = ({ isOpen, handleClose, title, subtitle, children }) => {
	return (
		<>
			<Dialog
				fullWidth
				maxWidth="md"
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="max-width-dialog-title"
			>
				<DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText>{subtitle}</DialogContentText>
					{children}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.element.isRequired,
}

export default modal
