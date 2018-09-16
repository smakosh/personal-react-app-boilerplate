import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-spinkit'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import { register } from '../actions'
import { Container, Button, InputField, Error, SEO } from '../../common'

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

const Card = styled.div`
    padding: 2rem;
    border: 1px solid #212121;
`

const Center = styled.div`
    text-align: center;
`

const enhance = compose(
	connect(null, { register }),
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

export default enhance(Register)
