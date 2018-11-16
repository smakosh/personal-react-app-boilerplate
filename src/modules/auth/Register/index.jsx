import React from 'react'
import Spinner from 'react-spinkit'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import { register } from '../actions'
import { Container, Button, InputField, Error, SEO } from '../../common'
import { Card, Center } from '../styles'

const Register = ({
	errors,
	touched,
	isSubmitting
}) => (
	<Container>
		<SEO
			url="/register"
			title="Register"
			description="Register"
		/>
		<Card register>
			<Form>
				<InputField label="firstName">
					<Field type="text" name="firstName" />
					{errors.firstName && touched.firstName && <Error>{errors.firstName}</Error>}
				</InputField>
				<InputField label="lastName">
					<Field type="text" name="lastName" />
					{errors.lastName && touched.lastName && <Error>{errors.lastName}</Error>}
				</InputField>
				<InputField label="username">
					<Field type="text" name="username" />
					{errors.username && touched.username && <Error>{errors.username}</Error>}
				</InputField>
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
							<span>Register</span>
						)}
					</Button>
				</Center>
			</Form>
			<Center>
				<p>Already registered? <Link to="/">Login</Link></p>
			</Center>
		</Card>
	</Container>
)

const enhance = compose(
	connect(null, { register }),
	withFormik({
		mapPropsToValues() {
		  return {
				firstName: '',
				lastName: '',
				username: '',
				email: '',
				password: ''
		  }
		},
		validationSchema: () => Yup.object().shape({
			firstName: Yup.string().min(2, 'Password has to be longer than 2 characters!').required(),
			lastName: Yup.string().min(2, 'Password has to be longer than 2 characters!').required(),
			username: Yup.string().min(2, 'Password has to be longer than 2 characters!').required(),
			email: Yup.string().email('E-mail is not valid!').required(),
			password: Yup.string().min(6, 'Password has to be longer than 6 characters!').required()
		}),
		handleSubmit(values, { props: { register }, setErrors, setSubmitting, resetForm }) {
			register(values, setErrors, setSubmitting, resetForm)
		}
	})
)

export default enhance(Register)
