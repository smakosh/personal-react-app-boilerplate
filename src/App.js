import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import store from './store'
import Private from './Routes/Private'
import Public from './Routes/Public'
import { verifyToken } from './modules/auth/actions'

import Login from './modules/auth/Login'
import Register from './modules/auth/Register'
import Profile from './modules/profile/Profile'
import { NotFound } from './modules/common'

export const history = createHistory()

try {
	if (localStorage.jwtToken) {
		store.dispatch(verifyToken(localStorage.jwtToken))
	}
} catch (e) {
	if (history.location.pathname !== '/') {
		history.push('/')
	}
}

const AppRoutes = () => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Public path="/" exact component={Login} />
				<Public path="/register" exact component={Register} />
				<Private path="/profile" exact component={Profile} />
				<Public component={NotFound} />
			</Switch>
		</Router>
	</Provider>
)

export default AppRoutes
