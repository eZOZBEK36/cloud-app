const defaultState = {
	loading: false,
}
const SHOWLOADER = 'SHOWLOADER'
const HIDELOADER = 'HIDELOADER'

const appReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SHOWLOADER:
			return { ...state, loading: true }
		case HIDELOADER:
			return { ...state, loading: false }
		default:
			return state
	}
}

const showLoader = () => ({ type: SHOWLOADER })
const hideLoader = () => ({ type: HIDELOADER })

export { showLoader, hideLoader, appReducer }
