import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-spinkit'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import { login } from '../actions'
import { Container, Button, InputField, Error, SEO } from '../../common'

const Login = ({
	errors,
	touched,
	isSubmitting
}) => (
	<Container>
		<SEO
			url="/"
			title="Login"
			description="Login"
		/>
		<Card>
			<Form>
				<InputField label="Email">
					<Field type="email" name="email" />
					{errors.email && touched.email && <Error>{errors.email}</Error>}
				</InputField>
				<InputField label="Password">
					<Field type="password" name="password" />
					{errors.password && touched.password && <Error>{errors.password}</Error>}
				</InputField>
				<Center>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<Spinner name="circle" color="white" />
						) : (
							<span>Login</span>
						)}
					</Button>
				</Center>
			</Form>
			<Center>
				<p>Don't have an account? no worries! <Link to="/register">Create one</Link></p>
			</Center>
		</Card>
	</Container>
)

const Card = styled.div`
    padding: 2rem;
    border: 1px solid #212121;
`

const Center = styled.div`
    text-align: center;
`

const enhance = compose(
	connect(null, { login }),
	withFormik({
		mapPropsToValues() {
		  return {
				email: '',
				password: ''
		  }
		},
		validationSchema: () => Yup.object().shape({
			email: Yup.string().email('E-mail is not valid!').required(),
			password: Yup.string().min(6, 'Password has to be longer than 6 characters!').required(),
		  }),
		handleSubmit(values, { props }) {
		  console.log(values)
		  // props.login(values.email, values.password)
		},
	  })
)

export default enhance(Login)
