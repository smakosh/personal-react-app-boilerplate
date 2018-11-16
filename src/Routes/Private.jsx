import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { compose, branch, renderComponent } from 'recompose'
import { Loading } from '../modules/common'
import { GlobalStyle } from './global-styles'

const Private = ({ auth, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (auth.isLoggedIn ? (
			<>
				<GlobalStyle />
				<Component {...props} />
			</>
		) : (
			<Redirect to="/" />
		))
		}
	/>
)

const mapStateToProps = ({ auth }) => ({
	auth
})

const enhance = compose(
	connect(mapStateToProps),
	branch(
		({ auth }) => (auth.loading === undefined || auth.loading),
		renderComponent(Loading)
	)
)

export default enhance(Private)
