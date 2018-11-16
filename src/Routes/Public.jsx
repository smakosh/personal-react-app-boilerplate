import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { branch, renderComponent, compose } from 'recompose'
import { Loading } from '../modules/common'
import { GlobalStyle } from './global-styles'

const Public = ({ auth, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (auth.isLoggedIn ? (
			<Redirect to="/profile" />
		) : (
			<>
				<GlobalStyle />
				<Component {...props} />
			</>
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
		props => props.auth === undefined,
		renderComponent(Loading)
	)
)

export default enhance(Public)
