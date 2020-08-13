import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		marginRight: theme.spacing(2),
	},
	navButton: {
		color: 'inherit',
		textDecoration: 'none',
	},
	navButtonGroup: {
		marginLeft: 'auto',
	},
	activeNav: {
		borderBottom: '2px solid #fff',
	},
}))

const MenuBar = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h5" className={classes.title}>
						GlobeTrotter
					</Typography>
					<div className={classes.navButtonGroup}>
						<Button className={classes.navButton}>
							<NavLink
								className={classes.navButton}
								activeClassName={classes.activeNav}
								to="/create"
							>
								Create Destination
							</NavLink>
						</Button>
						<Button className={classes.navButton}>
							<NavLink
								className={classes.navButton}
								activeClassName={classes.activeNav}
								to="/destinations"
							>
								View Destinations
							</NavLink>
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default MenuBar
