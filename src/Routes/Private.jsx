import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { compose, branch, renderComponent } from 'recompose'
import { Loading } from '../modules/common'

const Private = ({ auth, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (auth.isLoggedIn ? (
			<Component {...props} />
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
		props => props.auth.loading === undefined || props.auth.loading,
		renderComponent(Loading)
	)
)

export default enhance(Private)
