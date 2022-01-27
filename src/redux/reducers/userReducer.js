const defaultState = {
	currentUser: {},
	isAuth: false,
}

const SETUSER = 'SETUSER'
const LOGOUT = 'LOGOUT'

const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SETUSER:
			return { ...state, currentUser: action.payload, isAuth: true }
		case LOGOUT:
			localStorage.removeItem('token')
			return { ...state, currentUser: {}, isAuth: false }
		default:
			return state
	}
}

const logOut = () => ({ type: LOGOUT })
const setUser = user => ({ type: SETUSER, payload: user })

export { userReducer, setUser, logOut }
