import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose, renderComponent, branch } from 'recompose'
import { logout } from '../../auth/actions'
import { Button, Container, Loading, SEO } from '../../common'

const Profile = ({ auth, logout }) => (
	<Container>
		<SEO
			url="/profile"
			title="Profile"
			description="Profile"
		/>
		<h2>Welcome {`${auth.user.firstName} ${auth.user.lastName}`}</h2>
		<Center>
			<Button onClick={() => logout()}>Logout</Button>
		</Center>
	</Container>
)

const Center = styled.div`
    text-align: center;
`

const mapStateToProps = ({ auth }) => ({
	auth
})

const enhance = compose(
	connect(mapStateToProps, { logout }),
	branch(
		({ auth }) => !!auth.loading || !auth,
		renderComponent(Loading)
	)
)

export default enhance(Profile)
