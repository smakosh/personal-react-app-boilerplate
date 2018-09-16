import isEmpty from '../../utils/isEmpty'

export default (state = { loading: false }, action) => {
	switch (action.type) {
	case 'SAVE_USER':
		return {
			...state,
			isLoggedIn: !isEmpty(action.payload),
			user: action.payload,
			loading: false
		}
	case 'EDIT_PROFILE_FAILED':
		return {
			errors: action.payload,
			loading: false
		}
	case 'AUTH_FAILED':
		return {
			errors: action.payload,
			loading: false
		}
	case 'LOADING_USER':
		return {
			loading: true
		}
	default:
		return state
	}
}
