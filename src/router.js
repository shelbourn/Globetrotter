import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import MenuBar from './components/UI/menuBar'
import CreateDestination from './containers/CreateDestination'
import DestinationView from './containers/DestinationView'
const mainRouter = () => {
	return (
		<>
			<Router>
				<MenuBar />
				<Switch>
					<Route path="/create" component={CreateDestination} />
					<Route path="/destinations" component={DestinationView} />
					<Route exact path="/">
						<Redirect to="/create" />
					</Route>
				</Switch>
			</Router>
		</>
	)
}
export default mainRouter
